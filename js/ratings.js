function collect_ratings() {
    const ratings = {'count': 0, 'sum': 0, 'average': 0,};
    let rating = 0;

    const elements = document.querySelectorAll(".rating");

//loop through the ratings and populate the count and sum 
    elements.forEach(function(element) {
        rating = parseInt(element.id.replace("star", ""));
        ratings.count += parseInt(element.value);
        ratings.sum += rating * parseInt(element.value);
    });
//prevent divide by zero and calculate the average
    if(ratings.count !== 0) {
        ratings.average = ratings.sum/ratings.count;
    }
    return ratings;


}
//add event listener that listens for a change in the document
document.addEventListener("change", () => {
    const ratings = collect_ratings();
    document.querySelector("#average").value = ratings.average.toFixed(2);

});