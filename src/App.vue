<script setup>
import { onMounted } from "vue";
import { loadPyodide } from "pyodide";

onMounted(async () => {
    const pyodide = await loadPyodide({ packages: ["requests"] });
    console.log(pyodide.runPython("1 + 1"));
});
</script>

<template>
    <h1>Check browser console for output / errors.</h1>
</template>
