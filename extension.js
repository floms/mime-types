/**
 * 
 * Implementation to mimic https://nodejs.org/api/path.html#path_path_extname_path
 * 
 * @param {*} path 
 * @returns 
 */
module.exports = function getExtension(path) {
    if (typeof path !== 'string') {
        return '';
    }

    // replace consecutive dots with single dot
    var sanitizedPath = path.split(/\.+/).join('.');

    // separate path by directory delimiter /  or \ for windows
    var pathParts = sanitizedPath.split(/\\|\//);

    // get the file identifier
    var file = pathParts.pop();

    // split file into parts by extension delimiter . 
    var fileParts = file.split('.');

    var extension = fileParts.pop()
    var filename = fileParts.pop()

    if (!extension || !filename) {
        return '';
    }

    return `.${extension}`;
};