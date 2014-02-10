/*
 * @param template {String} 模板字符串
 * @param data {Object} 数据模型
 * @return newStr {String} 替换后的新字符串
 */
function render(template, data) {

	/**
	 * @param str {String} 匹配模式的字符串
	 * -> {{data.prop}}
	 * @param key {String} 与模式子表达式匹配的字符串
	 * -> data.prop
	 */
	return template.replace(/\{\{([\w\.]*)\}\}/g, function(str, key) {
	
		var keys = key.split('.'),
			v = data[keys.shift()];
			
		for(var i = 0, l = keys.length; i< l; i++) {
			v = v[keys[i]];
		}
		
		return (typeof v !== "undefined" && v !== null) ? v : "";
		
	});
	
}