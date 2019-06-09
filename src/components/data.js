const color = {
    Line1: "#1c266f",
    Line2: "#db613f",
    Line3: "d3307d",
    Line4: "#4ca660",
    line7: "a3d5e6",
    line10:"1f55a1"
}
const line = {
    line1: 1,
    line2: 2,
    line3: 4,
    line4: 8,
    line7: 16,
    line10: 32
}
const center = { x: 700, y: 300 }
const max = 9999;
const mapData = {
    color: color,
    stations: [
        {
            index: 0,
            name: "韦家碾",
            location: { x: center.x, y: center.y - 180 },
            nameOffset: { x: center.x - 40, y: center.y + 3 - 180 },
            link: [{
                index: 1,
                color: color.Line1,
                weight: 1,
                d: `M${center.x} ${center.y - 180 + 4} T${center.x} ${center.y - 150}`
            }],
            icon: "",
            line: line.line1,
        },
        {
            index: 1,
            name: "升仙湖",
            location: { x: center.x, y: center.y - 150 },
            nameOffset: { x: center.x - 40, y: center.y + 3 - 150 },
            link: [
                {
                    index: 0,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 2,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y - 150 + 4} T${center.x} ${center.y - 120}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 2,
            name: "火车北站",
            location: { x: center.x, y: center.y - 120 },
            nameOffset: { x: center.x - 50, y: center.y + 3 - 120 },
            link: [
                {
                    index: 1,
                    color: color.Line1,
                    weight: 1
                },
                {
                    index: 3,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y - 120 + 4} T${center.x} ${center.y - 90}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 3,
            name: "人民北路",
            location: { x: center.x, y: center.y - 90 },
            nameOffset: { x: center.x - 50, y: center.y + 3 - 90 },
            link: [
                {
                    index: 2,
                    color: color.Line1,
                    weight: 1
                },
                {
                    index: 4,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y - 90 + 4} T${center.x} ${center.y - 60}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 4,
            name: "文殊院",
            location: { x: center.x, y: center.y - 60 },
            nameOffset: { x: center.x - 40, y: center.y + 3 - 60 },
            link: [
                {
                    index: 3,
                    color: color.Line1,
                    weight: 1
                },
                {
                    index: 5,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y - 60 + 4} T${center.x} ${center.y - 30}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 5,
            name: "骡马市",
            location: { x: center.x, y: center.y - 30 },
            nameOffset: { x: center.x - 40, y: center.y - 35 },
            link: [
                {
                    index: 4,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 6,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y - 30 + 4} T${center.x} ${center.y - 0}`
                },
                {
                    index: 37,
                    color: color.Line4,
                    weight: 1,
                    d: `M${center.x-4} ${center.y - 30} T${center.x-140} ${center.y - 30}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 6,
            name: "天府广场",
            location: { x: center.x, y: center.y },
            nameOffset: { x: center.x - 50, y: center.y -5 },
            link: [
                {
                    index: 5,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 7,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 4} T${center.x} ${center.y + 33}`
                },
                {
                    index: 35,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x-4} ${center.y} T${center.x-70} ${center.y }`
                },
                {
                    index: 49,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x+4} ${center.y} T${center.x+80} ${center.y+40 }`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 7,
            name: "锦江宾馆",
            location: { x: center.x, y: center.y + 30 },
            nameOffset: { x: center.x - 50, y: center.y + 33 },
            link: [
                {
                    index: 6,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 8,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 34} T${center.x} ${center.y + 63}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 8,
            name: "华西坝",
            location: { x: center.x, y: center.y + 60 },
            nameOffset: { x: center.x - 40, y: center.y + 63 },
            link: [
                {
                    index: 7,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 9,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 64} T${center.x} ${center.y + 90}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 9,
            name: "省体育馆",
            location: { x: center.x, y: center.y + 90 },
            nameOffset: { x: center.x - 50, y: center.y + 93 },
            link: [
                {
                    index: 8,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 10,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 94} T${center.x} ${center.y + 120}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 10,
            name: "倪家桥",
            location: { x: center.x, y: center.y + 120 },
            nameOffset: { x: center.x - 40, y: center.y + 123 },
            link: [
                {
                    index: 9,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 11,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 124} T${center.x} ${center.y + 150}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 11,
            name: "桐梓林",
            location: { x: center.x, y: center.y + 150 },
            nameOffset: { x: center.x - 40, y: center.y + 153 },
            link: [
                {
                    index: 10,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 12,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 154} T${center.x} ${center.y + 180}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 12,
            name: "火车南站",
            location: { x: center.x, y: center.y + 180 },
            nameOffset: { x: center.x - 50, y: center.y + 183 },
            link: [
                {
                    index: 11,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 13,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 184} T${center.x} ${center.y + 210}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 13,
            name: "高新",
            location: { x: center.x, y: center.y + 210 },
            nameOffset: { x: center.x - 30, y: center.y + 213 },
            link: [
                {
                    index: 12,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 14,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 214} T${center.x} ${center.y + 240}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 14,
            name: "金融城",
            location: { x: center.x, y: center.y + 240 },
            nameOffset: { x: center.x - 40, y: center.y + 243 },
            link: [
                {
                    index: 13,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 15,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 244} T${center.x} ${center.y + 270}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 15,
            name: "孵化园",
            location: { x: center.x, y: center.y + 270 },
            nameOffset: { x: center.x - 40, y: center.y + 273 },
            link: [
                {
                    index: 14,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 16,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 274} T${center.x} ${center.y + 300}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 16,
            name: "锦城广场",
            location: { x: center.x, y: center.y + 300 },
            nameOffset: { x: center.x - 50, y: center.y + 303 },
            link: [
                {
                    index: 15,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 17,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 304} T${center.x} ${center.y + 330}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 17,
            name: "锦城广场",
            location: { x: center.x, y: center.y + 300 },
            nameOffset: { x: center.x - 50, y: center.y + 303 },
            link: [
                {
                    index: 16,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 18,
                    color: color.Line1,
                    weight: 1,
                   // d: `M${center.x} ${center.y + 304} T${center.x} ${center.y + 330}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 18,
            name: "世纪城",
            location: { x: center.x, y: center.y + 330 },
            nameOffset: { x: center.x - 40, y: center.y + 333 },
            link: [
                {
                    index: 17,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 19,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 334} T${center.x} ${center.y + 360}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 19,
            name: "天府三街",
            location: { x: center.x, y: center.y + 360 },
            nameOffset: { x: center.x - 50, y: center.y + 363 },
            link: [
                {
                    index: 18,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 20,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 364} T${center.x} ${center.y + 390}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 20,
            name: "天府五街",
            location: { x: center.x, y: center.y + 390 },
            nameOffset: { x: center.x - 50, y: center.y + 393 },
            link: [
                {
                    index: 19,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 21,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 394} T${center.x} ${center.y + 420}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 21,
            name: "华府大道",
            location: { x: center.x, y: center.y + 420 },
            nameOffset: { x: center.x - 50, y: center.y + 423 },
            link: [
                {
                    index: 20,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 22,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x} ${center.y + 424} Q${center.x} ${center.y + 450} ${center.x + 30} ${center.y + 450}`
                }
            ],
            icon: "", line: line.line1,
        },
        {
            index: 22,
            name: "四河",
            location: { x: center.x + 30, y: center.y + 450 },
            nameOffset: { x: center.x + 20, y: center.y + 468 },
            link: [
                {
                    index: 21,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 23,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 30} ${center.y + 446} Q${center.x + 30} ${center.y + 420} ${center.x + 60} ${center.y + 420}`
                },
                {
                    index: 25,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 34} ${center.y + 450} T${center.x + 60} ${center.y + 450}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 23,
            name: "广都",
            location: { x: center.x + 60, y: center.y + 420 },
            nameOffset: { x: center.x + 50, y: center.y + 408 },
            link: [
                {
                    index: 22,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 24,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 64} ${center.y + 420} T${center.x + 90} ${center.y + 420}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 24,
            name: "五根松",
            location: { x: center.x + 90, y: center.y + 420 },
            nameOffset: { x: center.x + 75, y: center.y + 408 },
            link: [
                {
                    index: 23,
                    color: color.Line1,
                    weight: 1,
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 25,
            name: "华阳",
            location: { x: center.x + 60, y: center.y + 450 },
            nameOffset: { x: center.x + 50, y: center.y + 468 },
            link: [
                {
                    index: 22,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 26,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 64} ${center.y + 450} T${center.x + 90} ${center.y + 450}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 26,
            name: "海仓路",
            location: { x: center.x + 90, y: center.y + 450 },
            nameOffset: { x: center.x + 78, y: center.y + 468 },
            link: [
                {
                    index: 25,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 27,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 94} ${center.y + 450} T${center.x + 120} ${center.y + 450}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 27,
            name: "广福",
            location: { x: center.x + 120, y: center.y + 450 },
            nameOffset: { x: center.x + 108, y: center.y + 438 },
            link: [
                {
                    index: 26,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 28,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 124} ${center.y + 450} T${center.x + 150} ${center.y + 450}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 28,
            name: "红石公园",
            location: { x: center.x + 150, y: center.y + 450 },
            nameOffset: { x: center.x + 133, y: center.y + 468 },
            link: [
                {
                    index: 27,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 29,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 154} ${center.y + 450} T${center.x + 180} ${center.y + 450}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 29,
            name: "麓湖",
            location: { x: center.x + 180, y: center.y + 450 },
            nameOffset: { x: center.x + 168, y: center.y + 438 },
            link: [
                {
                    index: 28,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 30,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 184} ${center.y + 450} T${center.x + 210} ${center.y + 450}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 30,
            name: "武汉路",
            location: { x: center.x + 210, y: center.y + 450 },
            nameOffset: { x: center.x + 198, y: center.y + 468 },
            link: [
                {
                    index: 29,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 31,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 214} ${center.y + 450} T${center.x + 240} ${center.y + 450}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 31,
            name: "天府公园",
            location: { x: center.x + 240, y: center.y + 450 },
            nameOffset: { x: center.x + 220, y: center.y + 438 },
            link: [
                {
                    index: 30,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 32,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 244} ${center.y + 450} T${center.x + 270} ${center.y + 450}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 32,
            name: "西博城",
            location: { x: center.x + 270, y: center.y + 450 },
            nameOffset: { x: center.x + 254, y: center.y + 468 },
            link: [
                {
                    index: 31,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 33,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 274} ${center.y + 450} T${center.x + 300} ${center.y + 450}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 33,
            name: "广州路",
            location: { x: center.x + 300, y: center.y + 450 },
            nameOffset: { x: center.x + 285, y: center.y + 438 },
            link: [
                {
                    index: 32,
                    color: color.Line1,
                    weight: 1,
                },
                {
                    index: 34,
                    color: color.Line1,
                    weight: 1,
                    d: `M${center.x + 304} ${center.y + 450} T${center.x + 330} ${center.y + 450}`
                }
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 34,
            name: "兴隆湖",
            location: { x: center.x + 330, y: center.y + 450 },
            nameOffset: { x: center.x + 320, y: center.y + 468 },
            link: [
                {
                    index: 33,
                    color: color.Line1,
                    weight: 1,
                },
            ],
            icon: "",
            line: line.line1,
        },
        {
            index: 35,
            name: "人民公园",
            location: { x: center.x -70, y: center.y  },
            nameOffset: { x: center.x -90, y: center.y +20},
            link: [
                {
                    index: 6,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 36,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -70-4} ${center.y } T${center.x -106} ${center.y - 15}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 36,
            name: "通惠门",
            location: { x: center.x -105, y: center.y-15  },
            nameOffset: { x: center.x -90, y: center.y -15},
            link: [
                {
                    index: 35,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 37,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -109} ${center.y-16 } T${center.x -140} ${center.y - 30}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 37,
            name: "中医大省医院",
            location: { x: center.x -140, y: center.y-30  },
            nameOffset: { x: center.x -140, y: center.y -40},
            link: [
                {
                    index: 5,//todo应该链接宽窄巷子
                    color: color.Line4,
                    weight: 1,
                },
                {
                    index: 36,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 38,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -144} ${center.y-32 } T${center.x -200} ${center.y - 60}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 38,
            name: "白果林",
            location: { x: center.x -200, y: center.y-60  },
            nameOffset: { x: center.x -190, y: center.y -60},
            link: [
                {
                    index: 37,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 39,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -204} ${center.y-62 } T${center.x -260} ${center.y - 90}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 39,
            name: "蜀汉东路",
            location: { x: center.x -260, y: center.y-90  },
            nameOffset: { x: center.x -250, y: center.y -90},
            link: [
                {
                    index: 38,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 40,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -264} ${center.y-92 } T${center.x -320} ${center.y - 120}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 40,
            name: "一品天下",
            location: { x: center.x -320, y: center.y-120  },
            nameOffset: { x: center.x -310, y: center.y -120},
            link: [
                {
                    index: 39,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 41,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -324} ${center.y-122 } T${center.x -350} ${center.y - 135}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 41,
            name: "羊犀立交",
            location: { x: center.x -350, y: center.y-135  },
            nameOffset: { x: center.x -340, y: center.y -135},
            link: [
                {
                    index: 40,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 42,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -354} ${center.y-137 } T${center.x -380} ${center.y - 150}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 42,
            name: "茶店子客运站",
            location: { x: center.x -380, y: center.y-150  },
            nameOffset: { x: center.x -370, y: center.y -150},
            link: [
                {
                    index: 41,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 43,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -384} ${center.y-152 } T${center.x -410} ${center.y - 165}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 43,
            name: "迎宾大道",
            location: { x: center.x -410, y: center.y-165  },
            nameOffset: { x: center.x -400, y: center.y -165},
            link: [
                {
                    index: 42,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 44,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -414} ${center.y-167 } T${center.x -440} ${center.y - 180}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 44,
            name: "金科北路",
            location: { x: center.x -440, y: center.y-180  },
            nameOffset: { x: center.x -430, y: center.y -180},
            link: [
                {
                    index: 43,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 45,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -444} ${center.y-182 } T${center.x -470} ${center.y - 195}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 45,
            name: "金周路",
            location: { x: center.x -470, y: center.y-195  },
            nameOffset: { x: center.x -460, y: center.y -195},
            link: [
                {
                    index: 44,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 46,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -474} ${center.y-197 }  T${center.x -500} ${center.y - 210}`
                },
                
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 46,
            name: "百草路",
            location: { x: center.x -500, y: center.y-210  },
            nameOffset: { x: center.x -490, y: center.y -210},
            link: [
                {
                    index: 45,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 47,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -504} ${center.y-210 }  T${center.x -530} ${center.y - 210}`
                },
                
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 47,
            name: "天河路",
            location: { x: center.x -530, y: center.y-210  },
            nameOffset: { x: center.x -545, y: center.y -195},
            link: [
                {
                    index: 46,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 48,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x -534} ${center.y-210 }  T${center.x -560} ${center.y - 210}`
                },
                
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 48,
            name: "犀浦",
            location: { x: center.x -560, y: center.y-210  },
            nameOffset: { x: center.x -570, y: center.y -218},
            link: [
                {
                    index: 47,
                    color: color.Line2,
                    weight: 1,
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 49,
            name: "春熙路",
            location: { x: center.x +80, y: center.y+40  },
            nameOffset: { x: center.x +90, y: center.y +40},
            link: [
                {
                    index: 6,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 50,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +84} ${center.y+42 }  T${center.x +120} ${center.y +60}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 50,
            name: "东门大桥",
            location: { x: center.x +120, y: center.y+60  },
            nameOffset: { x: center.x +130, y: center.y +60},
            link: [
                {
                    index: 49,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 51,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +124} ${center.y+62 }  T${center.x +160} ${center.y +80}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 51,
            name: "牛王庙",
            location: { x: center.x +160, y: center.y+80  },
            nameOffset: { x: center.x +170, y: center.y +80},
            link: [
                {
                    index: 50,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 52,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +164} ${center.y+82 }  T${center.x +200} ${center.y +100}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 52,
            name: "牛市口",
            location: { x: center.x +200, y: center.y+100  },
            nameOffset: { x: center.x +210, y: center.y +100},
            link: [
                {
                    index: 51,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 53,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +204} ${center.y+102 }  T${center.x +240} ${center.y +120}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 53,
            name: "东大路",
            location: { x: center.x +240, y: center.y+120  },
            nameOffset: { x: center.x +200, y: center.y +130},
            link: [
                {
                    index: 52,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 54,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +244} ${center.y+120 }  T${center.x +280} ${center.y +120}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 54,
            name: "塔子山",
            location: { x: center.x +280, y: center.y+120  },
            nameOffset: { x: center.x +270, y: center.y +110},
            link: [
                {
                    index: 53,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 55,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +284} ${center.y+120 }  T${center.x +350} ${center.y +120}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 55,
            name: "成都东客站",
            location: { x: center.x +350, y: center.y+120  },
            nameOffset: { x: center.x +350, y: center.y +110},
            link: [
                {
                    index: 54,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 56,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +354} ${center.y+120 }  T${center.x +380} ${center.y +120}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 56,
            name: "成渝立交",
            location: { x: center.x +380, y: center.y+120  },
            nameOffset: { x: center.x +390, y: center.y +125},
            link: [
                {
                    index: 55,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 57,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +382} ${center.y+123 }  T${center.x +395} ${center.y +140}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 57,
            name: "惠王陵",
            location: { x: center.x +395, y: center.y+140  },
            nameOffset: { x: center.x +405, y: center.y +143},
            link: [
                {
                    index: 56,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 58,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +397} ${center.y+143 }  T${center.x +410} ${center.y +160}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 58,
            name: "洪河",
            location: { x: center.x +410, y: center.y+160  },
            nameOffset: { x: center.x +420, y: center.y +163},
            link: [
                {
                    index: 57,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 59,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +412} ${center.y+163 }  T${center.x +425} ${center.y +180}`
                },
                
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 59,
            name: "成都行政学院",
            location: { x: center.x +425, y: center.y+180  },
            nameOffset: { x: center.x +435, y: center.y +183},
            link: [
                {
                    index: 58,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 60,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +427} ${center.y+183 }  T${center.x +440} ${center.y +200}`
                },
              
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 60,
            name: "大面铺",
            location: { x: center.x +440, y: center.y+200  },
            nameOffset: { x: center.x +450, y: center.y +203},
            link: [
                {
                    index: 59,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 61,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +442} ${center.y+203 }  T${center.x +455} ${center.y +220}`
                },
              
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 61,
            name: "连山坡",
            location: { x: center.x +455, y: center.y+220  },
            nameOffset: { x: center.x +465, y: center.y +223},
            link: [
                {
                    index: 60,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 62,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +457} ${center.y+223 }  T${center.x +470} ${center.y +240}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 62,
            name: "界牌",
            location: { x: center.x +470, y: center.y+240  },
            nameOffset: { x: center.x +480, y: center.y +243},
            link: [
                {
                    index: 61,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 63,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +472} ${center.y+243 }  T${center.x +485} ${center.y +260}`
                },
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 63,
            name: "书房",
            location: { x: center.x +485, y: center.y+260  },
            nameOffset: { x: center.x +495, y: center.y +263},
            link: [
                {
                    index: 62,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 64,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +487} ${center.y+263 }  T${center.x +500} ${center.y +280}`
                }, 
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 64,
            name: "龙平路",
            location: { x: center.x +500, y: center.y+280  },
            nameOffset: { x: center.x +510, y: center.y +283},
            link: [
                {
                    index: 63,
                    color: color.Line2,
                    weight: 1,
                },
                {
                    index: 65,
                    color: color.Line2,
                    weight: 1,
                    d: `M${center.x +502} ${center.y+283 }  T${center.x +515} ${center.y +300}`
                },
              
            ],
            icon: "",
            line: line.line2,
        },
        {
            index: 65,
            name: "龙平路",
            location: { x: center.x +515, y: center.y+300  },
            nameOffset: { x: center.x +525, y: center.y +303},
            link: [
                {
                    index: 64,
                    color: color.Line2,
                    weight: 1,
                },
              
            ],
            icon: "",
            line: line.line2,
        },
    ]
}

export default {
    getData() {
        return mapData
    },
    road() {
        let min = [], road = [], g = []
        //结果初始化初始化&构建邻接矩阵
        for (let i = 0; i < mapData.stations.length; ++i) {
            min.push([])
            road.push([])
            g.push([])
            for (let j = 0; j < mapData.stations.length; ++j) {
                road[i].push("")
                min[i].push(max)
                g[i].push(max)
                //结果初始化
                if (i == j) {
                    //最短距离
                    min[i][j] = 0
                    g[i][j]=0
                    //最有路径
                    road[i][j] = `${i}`
                }
               
            }
        }
        //邻接矩阵初始化
        for (let i = 0; i < mapData.stations.length; ++i) {
            for (let j = 0; j < mapData.stations[i].link.length; ++j) {
                g[i][mapData.stations[i].link[j].index] = mapData.stations[i].link[j].weight
                min[i][mapData.stations[i].link[j].index] = mapData.stations[i].link[j].weight
                road[i][mapData.stations[i].link[j].index] = `${mapData.stations[i].index},${mapData.stations[i].link[j].index}`
            }
        }
        // 最短路径
        for (let k = 0; k < mapData.stations.length; ++k) {
            for (let i = 0; i < mapData.stations.length; ++i) {
                for (let j = 0; j < mapData.stations.length; ++j) {

                    if (min[i][k] < max && g[k][j] < max && min[i][k]+g[k][j] < min[i][j]) {
                        min[i][j] = min[i][k] + g[k][j]
                        road[i][j] = road[i][k]+`,${j}`
                        min[j][i] = min[i][j]
                        road[j][i] = road[i][j]
                    }
                }
            }
        }
        for (let i = 0; i < mapData.stations.length; ++i) {
            for (let j = 0; j < mapData.stations.length; ++j) 
                {
                    if(min[i][j] == max)
                    console.log("waring!!!!!!!!!!!!!!,dataerror",i,j)
                }
            }
        return {
            min,
            road
        }
    }

}