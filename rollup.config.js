import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/js/stor.js',
    output: {
        file: 'dist/stor.min.js',
        format: 'cjs',
        plugins: [
            terser()
        ]
    },

    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),

        resolve(),
        commonjs()
    ]
};