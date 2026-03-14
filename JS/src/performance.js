
import Stats from "https://cdn.jsdelivr.net/npm/stats.js/build/stats.module.js";

export function createPerformancePanel(){

    const stats = new Stats();
    stats.showPanel(0);

    document.body.appendChild(stats.dom);

    function animate(){
        stats.begin();
        stats.end();
        requestAnimationFrame(animate);
    }

    animate();

    return stats;
}