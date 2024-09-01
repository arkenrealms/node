import * as mongo from '../../util/mongo';
import type * as Types from './interface.types';

// Interface

export const InterfaceSchema = mongo.createSchema<Types.InterfaceDocument>('Interface', {
  key: { type: String, required: true },
  submissions: [{ type: mongo.Schema.Types.ObjectId, ref: 'InterfaceSubmission' }],
  groupId: { type: mongo.Schema.Types.ObjectId, ref: 'InterfaceGroup', required: true },
  // commentsOnInterfaces: [{ type: mongo.Schema.Types.ObjectId, ref: 'CommentsOnInterfaces' }],
  // recordUpdatesOnInterfaces: [{ type: mongo.Schema.Types.ObjectId, ref: 'RecordUpdatesOnInterfaces' }],
});
export const Interface = mongo.createModel<Types.InterfaceDocument>('Interface', InterfaceSchema);

// InterfaceGroup

export const InterfaceGroupSchema = mongo.createSchema<Types.InterfaceGroupDocument>('InterfaceGroup', {});
export const InterfaceGroup = mongo.createModel<Types.InterfaceGroupDocument>('InterfaceGroup', InterfaceGroupSchema);

// InterfaceComponent

export const InterfaceComponentSchema = mongo.createSchema<Types.InterfaceComponentDocument>('InterfaceComponent', {
  value: { type: Object, default: {} },
  type: { type: String },
  hasAttachment: { type: Boolean },
  hasValidation: { type: Boolean },
  isDisabled: { type: Boolean },
  isEditable: { type: Boolean },
  isRequired: { type: Boolean },
});
export const InterfaceComponent = mongo.createModel<Types.InterfaceComponentDocument>(
  'InterfaceComponent',
  InterfaceComponentSchema
);

// InterfaceSubmission

export const InterfaceSubmissionSchema = mongo.createSchema<Types.InterfaceSubmissionDocument>('InterfaceSubmission', {
  interfaceId: { type: mongo.Schema.Types.ObjectId, ref: 'Interface' } as any,
});
export const InterfaceSubmission = mongo.createModel<Types.InterfaceSubmissionDocument>(
  'InterfaceSubmission',
  InterfaceSubmissionSchema
);
