<div align="center">
  <br>

  <img src=".erb/img/logo.png" width="60%" />

  <br>
  <br>

  <h2><strong>Arken Node</strong> is a <code>free and open source Node library</code></h2>

[![Build Status][github-actions-status]][github-actions-url] [![Github Tag][github-tag-image]][github-tag-url]
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.arken.gg)

</div>

<br>

## Introduction

<p>
  Welcome to Arken Node, designed for the Arken Realms open initiative. Arken Node uses TypeScript.
</p>

## Install

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main https://github.com/arkenrealms/node.git your-project-name
cd your-project-name
rush update
```

**Having issues installing? See our [debugging guide](https://github.com/arkenrealms/node/issues/1)**

## Starting Development

Start the app in the `dev` environment:

```bash
rushx dev
```

## Docs

See our [docs and guides here](https://docs.arken.gg/installation)

### Model Structure and Entity Relationships

In our framework, every model extends from the base class `Entity`, which includes the mandatory field `applicationId`.
This field is required for all models except for `Omniverse`, `Metaverse`, and `Application`.

#### Hierarchical Model Relationships

- **Omniverse**: Acts as the highest-level entity that encompasses multiple `Metaverses`.
- **Metaverse**: Each `Metaverse` can contain multiple `Applications`.
- **Application**: When enabled, an `Application` integrates all its associated models into the corresponding
  `Metaverse`.

All models linked to a specific `Application` must have an `applicationId` to maintain a clear association within the
`Metaverse` structure.

#### Ownership and Permission

Each `Entity` in the system must have an `owner`, represented as a `Profile` of an `Account`. An `Account` can own
multiple `Profiles`, allowing for a flexible user representation. This structure ensures that every change made to an
`Entity` can be tracked back to a specific `Profile` and `Account`.

#### Collaborative and Social Framework

Our framework is designed to encourage global collaboration and sharing within different `Metaverses`:

- **Contributions**: Anyone can create content for another user's `Metaverse`. If the `Metaverse` owner approves, this
  content can be included in their `Metaverse`.
- **Authority Types**: Approval can be managed directly by the `Metaverse` owner or be automated through community
  votes, depending on the `Metaverse`'s authority type.

#### Future Expansion with Node Schema

Once the `Node` schema is fully implemented, it will enable any model to connect with any other model without the need
for additional schemas. This flexibility will allow entities such as `Products`, `Games`, `NPCs`, etc., to have direct
relationships with models like `Rating` through `Node`. This will streamline community-driven features such as voting
and reduce the amount of code required to manage these relationships.

## Quick Links

- 🌐 [Arken Discord](https://discord.arken.gg)
- 🌐 [Arken Telegram](https://telegram.arken.gg)
- 📺 [Arken Realms](https://arken.gg/)
- 📖 [Return Portal](http://return.gg/portal)
- 💻 [Return Portal Web](https://github.com/arkenrealms/portal-web)
- 💻 [Return Portal UI](https://github.com/arkenrealms/portal-ui)
- 🔗 [Arken Seer](https://github.com/arkenrealms/seer)

## License

[MIT](LICENSE)

[github-actions-status]: https://github.com/arkenrealms/node/workflows/Test/badge.svg
[github-actions-url]: https://github.com/arkenrealms/node/actions
[github-tag-image]: https://img.shields.io/github/tag/arkenrealms/node.svg?label=version
[github-tag-url]: https://github.com/arkenrealms/node/releases/latest
