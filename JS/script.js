








































// Your JSON configuration
/*var configJSON = {
    "Thumbnail": null,
    "Light0": {
      "Red": 45,
      "Blue": 52,
      "Green": 255,
      "Intensity": 180.0
    },
    "Light1": {
      "Red": 232,
      "Blue": 232,
      "Green": 232,
      "Intensity": 19.0
    },
    "Light2": {
      "Red": 0,
      "Blue": 0,
      "Green": 0,
      "Intensity": 0.0
    },
    "Environment": {
      "Red": 0,
      "Blue": 158,
      "Green": 2,
      "Intensity": 82.0
    },
    "LightRotation": 345.0
  };
  
  // Parse the JSON
  var config = JSON.parse(configJSON);
  
  // Access the configuration values
  var light0 = config.Light0;
  var light1 = config.Light1;
  var light2 = config.Light2;
  var environment = config.Environment;
  var lightRotation = config.LightRotation;
  
  // Now you can use these values in your code to configure lights, environment, etc.
  // For example:
  console.log("Light 0 intensity:", light0.Intensity);
  console.log("Environment color - Red:", environment.Red);
  console.log("Light rotation:", lightRotation);
