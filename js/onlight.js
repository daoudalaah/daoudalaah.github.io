
var app = new Vue({
  el: '#switchLight',
  data: {
        roomArray: [],
        selected: -1,
		currentStatus:"",
		statusForAll: "",
    },
	mounted() {
			this.currentStatus=document.getElementById("stat").options[stat.selectedIndex].text;
			axios.get(url_api + which_light+this.currentStatus)
				 .then(response => {this.roomArray = response.data});
				 
	},
	methods: {
		reload(){
			this.currentStatus=document.getElementById("stat").options[stat.selectedIndex].text;
			axios.get(url_api + which_light+this.currentStatus)
				 .then(response => {this.roomArray = response.data});
		},
        switchLight() {
            if(this.selected==-1)
				this.selected= ( document.getElementById("sel").options[sel.selectedIndex].text);
            axios.post(url_api + "/" + this.selected + switch_light_url);
			setTimeout(this.reload, 500);
            this.reload();
			
            },
		changeSelect(){
			
			this.selected= document.getElementById("sel").options[sel.selectedIndex].text;
			
		},
		changeStatus(){
			
			this.reload();
			
		},
		switchAll()
		{
			
			this.statusForAll= ( document.getElementById("St_all").options[St_all.selectedIndex].text);
            axios.post(url_api + switch_All_Lights_url+this.statusForAll);
			setTimeout(this.reload, 500);
            this.reload();
		}
		
    }	
	
});