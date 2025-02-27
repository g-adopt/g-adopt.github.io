# g-adopt.github.io

You've reached the repository that powers [the G-ADOPT website][1].
It's powered by [MkDocs], using the [Material for MkDocs][2]
theme. API documentation is generated using [mkdocstrings].

## Local development

For simple development on the main content of the site, first make sure that you 
have installed [uv] by following the [installation instructions] for your 
platform. Clone this repository, and change to its directory. Start the MkDocs 
server, and the site will be available at http://localhost:8000

    $ uv run -- mkdocs serve

### API documentation

If you're working on the API documentation, there's an extra step
regarding the repository from which to build the documentation. By
default, MkDocs will look for a clone of [g-adopt] at the `g-adopt`
path inside this repository. If you'd prefer to work with the
repository at a different path, change the following key in the
`mkdocs.yml` file:

```yaml
plugins:
  - mkdocstrings:
      handlers:
        python:
          paths: ...
```

## Deployment

Changes to the live website are automatically deployed from pushes to
the `main` branch.

[1]: https://gadopt.org
[MkDocs]: https://www.mkdocs.org/
[2]: https://squidfunk.github.io/mkdocs-material/
[mkdocstrings]: https://mkdocstrings.github.io/
[uv]: https://github.com/astral-sh/uv
[installation instructions]: https://docs.astral.sh/uv/getting-started/installation/
[g-adopt]: https://github.com/g-adopt/g-adopt
