/**
 * Created by skadambi on 9/7/16.
 */
app.factory("dataExchange", function ($rootScope, $q) {
    this.ip = {
        name: { 'type': '' },
        referenceNumber: "",
        nameOfInventor: "",
        projectTitle: "",
        lastModified: "",
        owner: "",
        summary: ""
    };
    this.ipState = [
        { type: "Patent" },
        { type: "Trademark" },
        { type: "Copyright" },
        { type: "Others" }
    ];

    this.save = function (val) {
        if ($rootScope.projects.length < 1) {
            $rootScope.projects.push(val);
            return $rootScope.projects;
        } else {
            var arr = $rootScope.projects;
            for (var i = 0; i < arr.length; i++) {
                if ((arr[i].projectTitle.toLowerCase()) === (val.projectTitle.toLowerCase())) {
                    var repeated = "true";
                    return true;
                } else {
                    $rootScope.projects.push(val);
                    return $rootScope.projects;
                }
            }
        }
    }
    this.projectToBeEdited = function (val) {
        var deferred = $q.defer();
        $rootScope.projects.forEach(function (project) {
            if (project.projectTitle === val) {
                deferred.resolve(project)
                this.mes = project;
            }
        })
        return deferred.promise;

    }
    this.projectToBeDeleted = function (val) {
        var deferred = $q.defer();
        $rootScope.projects.forEach(function (project, index) {
            if (project.projectTitle === val) {
                console.log("index" + index);
                $rootScope.projects.splice(index, 1);
                deferred.resolve($rootScope.projects)
            }

        })
        return deferred.promise;
    }

    return this;
});
