<template>
<div>
    <svg  width="1400" height="1600" >

<g v-for="(station,index) in stations"  :key="index">
  <circle  :cx="station.location.x" :cy="station.location.y" r="4" stroke="black" :name="'station'+station.index" stroke-width="1" fill="white" @click="showChose(station)"/>
  <text :x="station.nameOffset.x" :y="station.nameOffset.y" font-size="10">{{station.name}}</text>
  <g v-for="(link,linkIndex) in station.link" :key="linkIndex">
<path   v-if="link.index > index" :d="link.d" :stroke="link.color" stroke-width="3" fill="none" :class="{halfHide:!(halfHide[station.index] && halfHide[link.index])}" />
  </g>
  
</g>
</svg>
    <div class="chose" v-show="chose.show">
        <div class="title">{{chose.station.name}}</div>
        <div class="btn boder_right" @click="setStrartEndStation(true)">设置起点</div>
        <div class="btn boder_left" @click="setStrartEndStation(false)">设置终点</div>
    </div>
</div>
</template>

<script>
import mapData from './data.js'
import {
    parse
} from 'path';

export default {
    name: 'map',
    props: {
        msg: String
    },
    data() {
        return {
            stations: [],
            halfHide: [],
            roadData:[],
            chose: {
                show: false,
                station: {
                    name: ""
                },
                start: -1,
                end: -1
            }
        }
    },
    methods: {
        road(s, e) {
            this.sethalfHide(false)
            let road=this.roadData.road[s][e];
            for (let index of road.split(',')) {
                this.halfHide[parseInt(index)] = true
            }
            //console.log(this.halfHide)
            this.chose.start = -1
            this.chose.end = -1

        },
        sethalfHide(state) {
            for (let i in this.stations) {
                this.halfHide[i] = state
            }
        },
        setStrartEndStation(isStart) {
            if (isStart) {
                this.chose.start = this.chose.station.index
            } else {
                this.chose.end = this.chose.station.index
            }
            if (this.chose.start > -1 && this.chose.end > -1) {
                this.road(this.chose.start, this.chose.end)
            }
            this.chose.show = false
        },
        showChose(station) {
            this.chose.station = station;
            this.chose.show = true
        }
    },
    mounted: function () {
        this.stations = mapData.getData().stations
        for (let item in this.stations) {
            this.halfHide.push(true)
        }
         this.roadData = mapData.road()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.chose {
    width: 200px;
    height: 60px;
    background: black;
    opacity: 0.7;
    position: fixed;
    top: 0;
    left: 100;
    left: 50%;
    top: 50%
}

.chose .title {
    border-bottom: 1px dashed white;
}

.chose .btn {
    display: inline-block;
    margin: 6px 0 0 0;
    width: 48%;
    cursor: pointer
}

.chose .boder_left {
    border-left: 1px solid white;
}

.chose .boder_right {
    border-right: 1px solid white;
}

.halfHide {
    opacity: 0.4;
}
</style>
