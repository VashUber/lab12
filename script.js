  new Vue({
  el: ".form",
  data: {
    list:[],
    name: "",
    surname: "",
  },
  methods: {
    StudentsList(){
      const name = this.name.charAt(0).toUpperCase() + this.name.substring(1).toLowerCase()
      const surname = this.surname.charAt(0).toUpperCase() + this.surname.substring(1).toLowerCase()
      const student = surname + " " + name
      this.list.push(student)
      this.name = ""
      this.surname = ""
    }
  },
  computed:{
    zero(){
      return this.surname.length === 0 || this.name.length === 0;
    }
  },
})
