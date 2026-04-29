export const storage = {
    getCaptured: function() {
        let datos = localStorage.getItem('mis_pkms');
        if (datos == null) { return []; }
        return JSON.parse(datos);
    },
    saveToCollection: function(pkm) {
        let lista = this.getCaptured();
        lista.push(pkm);
        localStorage.setItem('mis_pkms', JSON.stringify(lista));
    },
    setBattleTarget: function(pkm) {
        sessionStorage.setItem('objetivo', JSON.stringify(pkm));
    },
    getBattleTarget: function() {
        return JSON.parse(sessionStorage.getItem('objetivo'));
    }
};