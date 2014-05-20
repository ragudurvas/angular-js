function BlogCtrl($scope, $http){	
    $scope.blogs = [];

    $scope.addToBlog = function(){
	$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
		   $scope.blogs.push({ title: $scope.titleName , description: $scope.sortDescription });	
		   $http({	method: "POST", 
					url: "http://localhost/ajs/insert.php", 
					data : "title=" + $scope.titleName + "&description=" + $scope.sortDescription
					}).
			success(function(data) {				
				
			}).
			error(function(data, status) {
				console.log("Request failed");
		  }); 

	$scope.titleName='';
	$scope.sortDescription='';		
    };    
    
    $scope.fetch = function() {	
		   $http({method: "GET", url: "http://localhost/ajs/fetch.php"}).
			success(function(data, status) {			
				 angular.forEach(data, function(value, key){
				   $scope.blogs.push({title: value.title , description: value.description});   
				 });
			}).
			error(function(data, status) {
				console.log("Request failed");
		  }); 
		  
		};

}
