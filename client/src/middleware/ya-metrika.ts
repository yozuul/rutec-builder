// export default function ({ app }) {
//    if (process.env.NODE_ENV === 'production') {
//      // Замените 'XXXXXXXX' на свой номер счётчика Яндекс.Метрики.
//      const yaCounterId = '94941193';
//
//      // Подключите скрипт Яндекс.Метрики
//      const script = document.createElement('script');
//      script.innerHTML = `
//        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
//        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
//        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
//        ym(${yaCounterId}, "init", {
//          clickmap:true,
//          trackLinks:true,
//          accurateTrackBounce:true,
//          webvisor:true
//        });
//      `;
//      document.head.appendChild(script);
//
//      // Запуск Яндекс.Метрики
//      window.ym(ymId, 'hit');
//    }
//  }