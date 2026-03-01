import { binaryAgent, decodePayload } from '../binary';

const toBinaryString = (value: string): string =>
  value
    .split('')
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');

describe('binary/decodePayload', () => {
  it('decodes binary-encoded JSON payloads', () => {
    const payload = { hello: 'world', count: 2 };
    const encoded = toBinaryString(JSON.stringify(payload));

    expect(binaryAgent(encoded)).toBe(JSON.stringify(payload));
    expect(decodePayload(encoded)).toEqual(payload);
  });

  it('returns undefined and logs only a short payload preview when decode fails', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const malformed = 'not-binary-json-payload-that-should-be-truncated-in-logs';

    expect(decodePayload(malformed)).toBeUndefined();
    expect(warnSpy).toHaveBeenCalledTimes(1);

    const warningMessage = warnSpy.mock.calls[0][0] as string;
    expect(warningMessage).toContain('decodePayload failed:');
    expect(warningMessage).toContain('payloadPreview=not-binary-json-payload-that-should-be-t...');
    expect(warningMessage).not.toContain('payload-that-should-be-truncated-in-logs');

    warnSpy.mockRestore();
  });
});
