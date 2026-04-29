export class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        
        // Forma fácil de decidir la imagen
        if (data.image) {
            this.image = data.image;
        } else {
            this.image = data.sprites.other['official-artwork'].front_default;
        }

        // Forma fácil de decidir los tipos
        if (Array.isArray(data.types) && typeof data.types[0] === 'object') {
            this.types = [];
            for (let i = 0; i < data.types.length; i++) {
                this.types.push(data.types[i].type.name);
            }
        } else {
            this.types = data.types;
        }
    }

    // Un método simple para la mayúscula
    getFormattedName() {
        let primeraLetra = this.name.charAt(0).toUpperCase();
        let resto = this.name.slice(1);
        return primeraLetra + resto;
    }
}