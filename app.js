const app = Vue.createApp({
    data(){
        return {
            name: "Vazha",
            age: 28,
            image: "https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"
        }
    },
    methods: {
        ageAfterFiveYears(){
            return this.age +5
        },
        randomNumber(){
            const randNumber = Math.random();
            return randNumber;
        }
    }
})

app.mount("#assignment")