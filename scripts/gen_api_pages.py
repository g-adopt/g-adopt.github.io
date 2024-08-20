import mkdocs_gen_files
import pkgutil
from pathlib import Path

nav = mkdocs_gen_files.Nav()

root = Path(__file__).parent.parent
api_path = root / "g-adopt/gadopt"

for m in pkgutil.iter_modules([api_path]):
    doc_path = Path(m.name).with_suffix(".md")
    full_doc_path = Path("documentation/api", doc_path)

    with mkdocs_gen_files.open(full_doc_path, "w") as fd:
        print(f"::: gadopt.{m.name}", file=fd)
