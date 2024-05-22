const vm = Vue.createApp({
  data() {
    return {
      size: 150,
      perspective: 250,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      color: 'purple'
    };
  },
  methods: {
    reset() {
      this.perspective = 250;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.size = 150;
      this.color = 'purple'
    },
    async copy() {
      const text = `transform: ${this.box_perspective.transform};`;
      await navigator.clipboard.writeText(text);

      alert("CSS copied to clipboard");
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {
    box_perspective() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
    bg_color() {
      const colorTable = {
        purple: "#781ad6",
        blue: "#155ed4",
        pink: "#e817e8",
        green: "#1bb55b",
        orange: "#b54e1b",
      }
      return {
        background: `${colorTable[this.color]}`
      }
    },
    hex_color() {
      const colorTable = {
        purple: "#781ad6",
        blue: "#155ed4",
        pink: "#e817e8",
        green: "#1bb55b",
        orange: "#b54e1b",
      }
      return `${colorTable[this.color]}`
    },
    box_size() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    }
  },
}).mount("#app");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}