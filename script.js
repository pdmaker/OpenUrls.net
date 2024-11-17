// DOM 元素选择
const urlInput = document.getElementById('urlInput');
const delaySlider = document.getElementById('delaySlider');
const delayValue = document.getElementById('delayValue');
const openTabsRadio = document.getElementById('openTabs');
const openWindowsRadio = document.getElementById('openWindows');
const clearBtn = document.getElementById('clearBtn');
const openUrlsBtn = document.getElementById('openUrlsBtn');
const currentYearSpan = document.getElementById('currentYear');

// 设置当前年份
currentYearSpan.textContent = new Date().getFullYear();

// 延迟滑块事件监听器
delaySlider.addEventListener('input', function() {
    delayValue.textContent = this.value;
});

// 清除按钮事件监听器
clearBtn.addEventListener('click', function() {
    urlInput.value = '';
});

// 打开 URLs 按钮事件监听器
openUrlsBtn.addEventListener('click', function() {
    // 获取输入的 URLs
    const urls = urlInput.value.split('\n')
        .map(url => url.trim())
        .filter(url => url !== '');

    // 获取延迟和打开类型
    const delay = parseFloat(delaySlider.value);
    const openType = openTabsRadio.checked ? '_blank' : '_blank';

    // 批量打开 URLs
    urls.forEach((url, index) => {
        // 自动添加 https:// 前缀（如果没有）
        const finalUrl = url.startsWith('http') ? url : `https://${url}`;
        
        setTimeout(() => {
            window.open(finalUrl, openType, 'noopener,noreferrer');
        }, index * delay * 1000);
    });
});
