# Pyodide Vite Example

This is a sample Vite project using Pyodide.

In order to run this you need to download the full Pyodide release from Github: https://github.com/pyodide/pyodide/releases

If you want the distribution that includes everything including the built-in packages, use the one like `pyodide-0.26.0.tar.bz2` for the version you want.

Then unpack the archive file and copy the contents of the `pyodide` folder to `assets/public`.

```sh
mkdir public
wget https://github.com/pyodide/pyodide/releases/download/0.26.0/pyodide-0.26.0.tar.bz2
tar -xf pyodide-0.26.0.tar.bz2 -C public/
rm pyodide-0.26.0.tar.bz2
mv public/pyodide public/assets
```

To run the development server: `npm run dev`

To build and server the built files: `npm run build; npm run preview`
