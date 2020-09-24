var CourseTableOfContentModuleAndVideoContainer = document.getElementsByClassName("drawer---2bAtz");

var TotalModules = CourseTableOfContentModuleAndVideoContainer.length;

var FinalTableOfContentCollectionOutput = "";

for(var i = 0; i < TotalModules; i++){
	var ModuleTitle = CourseTableOfContentModuleAndVideoContainer[i].firstElementChild.firstElementChild.firstChild.children[1].firstElementChild.firstElementChild.innerText;
	
	var FinalModuleTitle = "Module " + ( i + 1 ) + " " + ModuleTitle;
	
	FinalTableOfContentCollectionOutput = FinalTableOfContentCollectionOutput + FinalModuleTitle + "\n";
	
	var ModuleVideosCollection = CourseTableOfContentModuleAndVideoContainer[i].children[1].firstElementChild.children;
	
	var TotalModuleVideos = ModuleVideosCollection.length;
	
	var VideosNameCollection = "";
	
	for(var j = 0; j < TotalModuleVideos; j++){
		var VideoName = ModuleVideosCollection[j].firstElementChild.firstElementChild.firstElementChild.innerText;
		
		if(VideoName == "")
			VideoName = ModuleVideosCollection[j].firstElementChild.firstElementChild.firstElementChild.innerHTML;
		
		var FinalVideoName = "Video " + ( j + 1 ) + " " + VideoName;
		
		VideosNameCollection = VideosNameCollection + FinalVideoName + "\n";
		
	}
	
	FinalTableOfContentCollectionOutput = FinalTableOfContentCollectionOutput + VideosNameCollection + "\n";
	
	VideosNameCollection = "";
}

console.log(FinalTableOfContentCollectionOutput);

CourseTableOfContentModuleAndVideoContainer = "";
TotalModules = "";
FinalTableOfContentCollectionOutput = "";
ModuleTitle = "";
FinalModuleTitle = "";
ModuleVideosCollection = "";
TotalModuleVideos = "";
VideosNameCollection = "";
VideoName = "";
FinalVideoName = "";