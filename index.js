var recipes = {
  cocoa : 4,
  "silken tofu" : 8,
  agave : 2
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, {[key]: value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
