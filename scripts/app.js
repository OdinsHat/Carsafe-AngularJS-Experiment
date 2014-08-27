(function(){
    var app = angular.module('carSafety', []);

    /**
     * Controller for handling the finding of safety records for a car by
     * taking 3 main values, year/make/model and returning the safety data for that car.
     *
     * @return null
     */
    app.controller('SafetyController', ['$http', function($http){
        this.apiUrl = "http://www.nhtsa.gov/webapi/api/SafetyRatings"
        this.years = years;
        this.makes = [];
        this.models = [];
        this.yearear = 1990;

        /**
         * Sets the current year which makes a JSONP request for
         * all matching makes to fill the array and update view.
         *
         * @param integer year year of vehicle manufacture
         */
        this.setCurrentYear = function(year) {
            this.currentYear = year || 0;
            console.log('Inside year');
            if (this.currentYear > 0) {
                $http.jsonp(this.apiUrl + '/modelyear/' + year + '/').sucess(function(data){
                    console.log(data.Results)
                });
            }
        };

        /**
         * Sets the make name upon selection then runs a JSONP
         * request to get the array of models.
         *
         * @param integer make vehicle manufacturer
         */
        this.setCurrentMake = function(make) {

        };
    }]);

    years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];
})();
