<template>
    <div>
        <button v-on:click="changePerspective">CHANGE</button>
        <div class="animation" ref="container"></div>
    </div>
    
</template>

<script>
import {mapState} from 'vuex';
import Sketch from './anim/Sketch';
// import {mapState} from 'vuex';
// import * as THREE from 'three';
// import gsap from 'gsap';

// import VTKLoader from '~/lib/vtkloader';

// const OrbitControls = require('three-orbit-controls')(THREE);
 
export default {
    data() {
        return {
            manager: {},
            states: [],
        }
    },
    watch: {
        page: function(newValue, oldValue) {
            // console.dir(manager);
            console.log(this.page);
            this.manager.change(newValue, oldValue);
            // console.log(newValue, oldValue);

        }
    },
    methods: {
        changePerspective() {
            this.manager.changePerspective();
        }
    },
    mounted() {
        this.manager = new Sketch(this.$refs.container, this.page);
    }, 
    computed: mapState(['page']),
}
</script>

<style scoped>
    .animation {
        position: fixed;
        top: 0;
        left: 0;
        /* z-index: 2000; */
        z-index: -1;
        width: 100%;
        height: 100vh;
        /* pointer-events: none; */
    }
</style>