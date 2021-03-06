Template.registerHelper('formatdatetime', function(datetime){
 if (moment && datetime) {
   if(datetime.getDate() === new Date().getDate()){
     return "今天 " + moment(datetime).format("hh:mm");
   } else{
     return moment(datetime).format("YYYY-MM-DD");
   }
 }
 else {
   return datetime;
 }
});

Template.registerHelper('formatdatetime1', function(datetime){
   return moment(datetime).format("YYYY-MM-DD HH:mm");
});
