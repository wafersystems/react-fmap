/**
 * date: 2018-05-07 14:24
 * auth: XuQiang
 **/

export const loadFengmap = (url) => {
	return new Promise(resolve => {
		if(window.fengmap || document.getElementById('fmap-script')) {
			resolve(window.fengmap);
		} else {
			//得到html的头部dom
			const theHead = document.getElementsByTagName('head').item(0);
			//创建脚本的dom对象实例
			let myScript = document.createElement('script');
			myScript.id = 'fmap-script';
			myScript.src = url;           //指定脚本路径
			// myScript.defer = true;              //程序下载完后再解析和执行
			theHead.appendChild(myScript); //把dom挂载到头部
			let __js_interval = setInterval(() => {
				if(window.fengmap) {
					if(__js_interval) {
						window.clearInterval(__js_interval);
						__js_interval = 0;
					}
					resolve(window.fengmap);
				}
			}, 500);
		}
	});
};