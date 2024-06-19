document.addEventListener('DOMContentLoaded', function() {
  var copySvg = `<?xml version="1.0" encoding="utf-8"?>
  <svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 x="0px" y="0px" width="30px" height="30px" viewBox="0 0 24 24" xml:space="preserve">
<g>
	<g>
		<path d="M13.904,23.375H6.1c-2.14,0-2.25-0.033-2.296-0.048c-0.146-0.044-0.302-0.165-0.392-0.255
			c-0.104-0.105-0.26-0.357-0.283-0.532c-0.015-0.107-0.017-1.396-0.017-2.155V7.387c0-2.138,0.033-2.248,0.047-2.295
			C3.202,4.948,3.321,4.791,3.411,4.7C3.515,4.595,3.77,4.436,3.948,4.414C4.072,4.399,5.763,4.398,6.1,4.398h2.491
			c2.192,0,2.276,0.051,2.374,0.109c0.038,0.023,0.124,0.076,1.575,1.525l2.719,2.719c1.447,1.445,1.506,1.543,1.525,1.575
			c0.028,0.046,0.054,0.089,0.073,0.357c0.023,0.051,0.036,0.106,0.036,0.165c0,0.044-0.007,0.087-0.02,0.126
			c0.013,0.34,0.02,0.873,0.02,1.724v7.686c0,2.143-0.032,2.247-0.047,2.298c-0.044,0.145-0.164,0.301-0.254,0.391
			c-0.103,0.103-0.354,0.26-0.53,0.284C15.947,23.373,14.515,23.375,13.904,23.375z M4.264,22.567c0.314,0,0.976,0.007,1.836,0.007
			h7.804c1.047,0,1.953-0.004,2.069-0.012c-0.011,0.008,0.035-0.04,0.058-0.06c0.024-0.024,0.052-0.065,0.06-0.079
			c-0.011-0.032,0.002-0.934,0.002-2.039v-7.686c0-0.589-0.006-1.087-0.015-1.449h-3.641c-1.323,0-2.4-1.077-2.4-2.4V5.214
			c-0.363-0.009-0.86-0.015-1.447-0.015H6.1c-1.051,0-1.96,0.005-2.072,0.011c0.02,0.001-0.032,0.039-0.054,0.059
			C3.951,5.292,3.922,5.334,3.915,5.348c0.012,0.02-0.003,0.834-0.003,2.039v12.998c0,1.046,0.005,1.952,0.012,2.068
			c-0.002-0.035,0.042,0.038,0.061,0.061c0.023,0.022,0.063,0.051,0.077,0.058C4.067,22.568,4.137,22.567,4.264,22.567z
			 M10.838,5.476V8.85c0,0.882,0.718,1.6,1.6,1.6h3.375c-0.25-0.257-0.637-0.649-1.12-1.131L11.975,6.6
			C11.499,6.124,11.1,5.73,10.838,5.476z"/>
	</g>
	<g>
		<path d="M19.241,19.602h-0.659c-0.221,0-0.4-0.18-0.4-0.4s0.179-0.4,0.4-0.4h0.659c0.328,0,0.64-0.004,0.716-0.011
			c0.006-0.005,0.047-0.042,0.069-0.061c0.024-0.024,0.053-0.066,0.06-0.08c-0.011-0.031,0.002-0.933,0.002-2.038V8.926
			c0-0.603-0.003-1.097-0.007-1.449h-3.648c-1.323,0-2.4-1.077-2.4-2.4V1.44c-0.363-0.009-0.86-0.015-1.447-0.015h-2.491
			c-1.051,0-1.96,0.005-2.071,0.011C8.03,1.439,7.993,1.476,7.97,1.494c-0.024,0.024-0.053,0.066-0.06,0.08
			c0.005,0.033-0.003,0.389-0.003,0.698v0.659c0,0.221-0.179,0.4-0.4,0.4s-0.4-0.18-0.4-0.4V2.272c0-0.298,0.006-0.817,0.047-0.954
			c0.043-0.145,0.164-0.302,0.253-0.393c0.103-0.104,0.357-0.264,0.537-0.285c0.122-0.015,1.813-0.016,2.151-0.016h2.491
			c2.192,0,2.276,0.051,2.374,0.109c0.037,0.022,0.124,0.075,1.575,1.525l2.719,2.719c1.55,1.55,1.574,1.646,1.6,1.757
			c0.004,0.017,0.011,0.045,0.018,0.224c0.011,0.037,0.017,0.076,0.017,0.117c0,0.033-0.004,0.065-0.011,0.096
			c0.006,0.306,0.011,0.833,0.011,1.754v7.686c0,2.143-0.032,2.247-0.047,2.298c-0.044,0.145-0.165,0.301-0.254,0.391
			c-0.103,0.103-0.354,0.26-0.529,0.284C19.997,19.592,19.629,19.602,19.241,19.602z M14.833,1.702v3.374c0,0.882,0.718,1.6,1.6,1.6
			h3.361c-0.254-0.268-0.637-0.662-1.106-1.131l-2.719-2.719C15.494,2.351,15.095,1.957,14.833,1.702z"/>
	</g>
</g>
</svg>`,
  copySearchSvg = `<svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm215.15-22.88a55.2 55.2 0 0 1 21.15 4.22c6.81 2.8 12.94 6.93 18.03 12.03 5.11 5.09 9.23 11.2 12.04 17.97 2.7 6.56 4.21 13.74 4.21 21.24 0 5.46-.8 10.79-2.31 15.83a54.357 54.357 0 0 1-5.09 11.81l16.7 18.37c1.49 1.63 1.38 4.19-.25 5.69l-15.35 14.02a4.045 4.045 0 0 1-5.68-.24l-15.7-17.51a55.418 55.418 0 0 1-11.7 5.09l-.15.04a55.542 55.542 0 0 1-15.9 2.33c-7.44 0-14.62-1.52-21.17-4.21a56.126 56.126 0 0 1-18.03-12.02 55.41 55.41 0 0 1-12.04-18 55.369 55.369 0 0 1-4.21-21.2c0-7.45 1.51-14.62 4.21-21.18a55.884 55.884 0 0 1 12.03-18.03c5.1-5.1 11.2-9.23 17.98-12.03a55.264 55.264 0 0 1 21.23-4.22zm24.48 30.96a35.057 35.057 0 0 0-11.26-7.55l-.19-.08a34.564 34.564 0 0 0-13.03-2.52c-4.72 0-9.2.94-13.24 2.59a35.247 35.247 0 0 0-11.26 7.56 34.544 34.544 0 0 0-10.15 24.5c0 4.71.95 9.2 2.59 13.23 1.79 4.23 4.37 8.07 7.55 11.25 3.22 3.2 7.03 5.81 11.25 7.53 4.07 1.68 8.55 2.62 13.26 2.62 4.71 0 9.19-.94 13.23-2.62 4.22-1.73 8.06-4.35 11.25-7.53 3.18-3.18 5.8-7.02 7.53-11.25 1.68-4.04 2.63-8.53 2.63-13.23 0-4.72-.95-9.2-2.63-13.25l-.07-.2c-1.74-4.13-4.3-7.89-7.46-11.05z"/></svg>`,
  removeSvg = `<svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm277.8 27.04v22.39c0 4.36-3.69 8.04-8.05 8.04h-98.87c-4.36 0-8.05-3.62-8.05-8.04V384.7c0-4.42 3.63-8.05 8.05-8.05h98.87c4.43 0 8.05 3.74 8.05 8.05z"/></svg>`,
  settingsSvg = `<?xml version="1.0" encoding="iso-8859-1"?>



  <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     viewBox="0 0 467.7 467.7" xml:space="preserve">
  <g>
    <g>
      <path d="M453.5,196.45l-43.4-7.5c-4.3-16.7-10.7-32.5-19.3-47.1l25.7-35.9c4.7-6.7,4-15.7-1.7-21.4l-15.3-15.4l-15.2-15.3
        c-3.2-3.2-7.5-4.9-11.8-4.9c-3.3,0-6.7,1-9.6,3l-36.1,25.4c-14.7-8.9-30.8-15.7-48.1-19.9l-7.1-43.1c-1.3-8.1-8.2-14-16.5-14
        l-21.8-0.1l-21.8-0.1c0,0,0,0-0.1,0c-8,0-15.1,5.9-16.5,13.9l-7.6,43.8c-16.7,4.3-32.5,11.1-46.9,19.5l-35.3-25.9
        c-2.9-2.1-6.4-3.1-9.7-3.1c-4.3,0-8.5,1.6-11.7,4.8l-15.5,15.3l-15.4,15.3c-5.7,5.7-6.5,14.7-1.9,21.4l25.6,36.3
        c-8.5,14.5-15.1,30.2-19.3,46.9l-43.1,7.1c-8.1,1.3-14,8.2-14,16.5l0,21.9L0,255.65c0,8.1,5.8,15.2,13.9,16.6l43.8,7.6
        c4.3,16.7,11.1,32.5,19.5,46.9l-25.5,35.5c-4.7,6.7-4,15.7,1.7,21.4l15.3,15.4l15.3,15.4c3.2,3.2,7.5,4.9,11.8,4.9
        c3.3,0,6.7-1,9.6-3l36.3-25.6c14.1,8.3,29.6,14.9,45.7,19.1l7.1,43.5c1.3,8.1,8.2,14,16.5,14l21.8,0.1l21.8,0.1c0,0,0,0,0.1,0
        c8,0,15.1-5.9,16.5-13.9l7.5-43.4c16.7-4.3,32.5-10.7,47.1-19.3l35.9,25.7c2.9,2.1,6.4,3.1,9.7,3.1c4.3,0,8.5-1.6,11.7-4.8
        l15.4-15.3l15.4-15.3c5.7-5.7,6.5-14.7,1.9-21.4l-25.5-36.1c8.7-14.5,15.3-30.2,19.7-46.9l43.5-7.1c8.1-1.3,14-8.2,14-16.5
        l0.1-21.8l0.1-21.8C467.3,204.75,461.4,197.85,453.5,196.45z M266.5,376.75c-11.1,2.5-22.1,3.8-33,3.8
        c-66.9,0-127.3-46-142.9-113.9c-18.1-79.1,31.2-157.8,110.2-175.9c11.1-2.5,22.1-3.8,33-3.8c66.9,0,127.3,46,142.9,113.9
        C394.8,279.85,345.5,358.55,266.5,376.75z"/>
      <path d="M339.6,256.95l-18.2-11.3c1.1-8.3,1.1-16.6-0.1-24.7l18.1-11.5c3.4-2.1,4.7-6.3,3.2-10l-4.1-9.7l-4.1-9.7
        c-1.5-3.6-5.4-5.6-9.3-4.7l-20.9,4.9c-4.9-6.6-10.8-12.4-17.5-17.4l4.7-20.9c0.9-3.9-1.1-7.8-4.8-9.3l-9.8-4l-9.8-4
        c-3.6-1.3-7.8,0.1-9.9,3.4l-11.3,18.2c-8.3-1.1-16.6-1.1-24.7,0.1l-11.5-18.1c-2.1-3.4-6.3-4.7-10-3.2l-9.7,4.1l-9.7,4.1
        c-3.6,1.5-5.6,5.4-4.7,9.3l4.9,20.9c-6.7,5-12.7,11-17.7,18l-20.7-4.7c-3.9-0.9-7.8,1.1-9.3,4.8l-4,9.8l-4,9.8
        c-1.5,3.6-0.1,7.9,3.2,10l18.3,11.4c-1.1,8.3-0.9,16.7,0.2,24.7l-18.1,11.2c-3.4,2.1-4.7,6.3-3.2,10l4.1,9.7l4.1,9.7
        c1.5,3.6,5.4,5.6,9.3,4.7l21-4.9c5,6.5,10.9,12.3,17.6,17.2l-4.7,20.7c-0.9,3.9,1.1,7.8,4.8,9.3l9.8,4l9.8,4
        c3.6,1.5,7.9,0.1,10-3.2l11.4-18.3c8.3,1.1,16.7,0.9,24.7-0.2l11.3,18c2.1,3.4,6.3,4.7,10,3.2l9.7-4.1l9.7-4.1
        c3.6-1.5,5.6-5.4,4.7-9.3l-4.9-21c6.3-4.8,12.1-10.6,16.9-17.1l20.9,4.7c3.9,0.9,7.8-1.1,9.3-4.8l4-9.8l4-9.8
        C344.3,263.35,343,259.05,339.6,256.95z M287.9,242.45c-4.8,29.9-32.9,50.2-62.8,45.4c-29.9-4.8-50.2-32.9-45.4-62.8
        c4.8-29.9,32.9-50.2,62.8-45.4C272.4,184.45,292.7,212.55,287.9,242.45z"/>
    </g>
  </g>
  </svg>`;

  document.body.insertAdjacentHTML('beforeend',
    `<div id="ex-seo" class="ex-seo">
      <div class="ex-seo_header" id="ex-seo_header">
        <span class="ex-seo_header-move">☰ Выбор региона</span>
        <div class="ex-seo_header-actions">
          <div class="ex-seo_header-actions__collapse" style="margin-top: -2px;">__</div>
          <div class="ex-seo_header-actions__collapsed" style="margin-top: 1px;">▢</div>
          <div class="ex-seo_header-actions__close" style="margin-top: -1px;">✖</div>
        </div>
      </div>
      <input class="ex-seo_input" placeholder="Поиск по названию или lr">
      <div class="ex-seo_region-list" id="ex-seo_region-list">
        <label id="225" name="Россия lr=225" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 1px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="225">Россия lr=225</label>
        <label id="3" name="Центр lr=3" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 4px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="3">Центр lr=3</label>
        <label id="1" name="Москва и область lr=1" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="1">Москва и область lr=1</label>
        <label id="213" name="Москва lr=213" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="213">Москва lr=213</label>
        <label id="216" name="Зеленоград lr=216" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="216">Зеленоград lr=216</label>
        <label id="20674" name="Троицк lr=20674" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20674">Троицк lr=20674</label>
        <label id="21624" name="Щербинка lr=21624" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21624">Щербинка lr=21624</label>
        <label id="214" name="Долгопрудный lr=214" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="214">Долгопрудный lr=214</label>
        <label id="215" name="Дубна lr=215" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="215">Дубна lr=215</label>
        <label id="217" name="Пущино lr=217" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="217">Пущино lr=217</label>
        <label id="219" name="Черноголовка lr=219" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="219">Черноголовка lr=219</label>
        <label id="10716" name="Балашиха lr=10716" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10716">Балашиха lr=10716</label>
        <label id="10717" name="Бронницы lr=10717" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10717">Бронницы lr=10717</label>
        <label id="10725" name="Домодедово lr=10725" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10725">Домодедово lr=10725</label>
        <label id="10729" name="Звенигород lr=10729" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10729">Звенигород lr=10729</label>
        <label id="10734" name="Коломна lr=10734" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10734">Коломна lr=10734</label>
        <label id="10745" name="Орехово-Зуево lr=10745" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10745">Орехово-Зуево lr=10745</label>
        <label id="10747" name="Подольск lr=10747" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10747">Подольск lr=10747</label>
        <label id="10754" name="Серпухов lr=10754" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10754">Серпухов lr=10754</label>
        <label id="10758" name="Химки lr=10758" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10758">Химки lr=10758</label>
        <label id="20523" name="Электросталь lr=20523" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20523">Электросталь lr=20523</label>
        <label id="20571" name="Жуковский lr=20571" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20571">Жуковский lr=20571</label>
        <label id="20576" name="Протвино lr=20576" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20576">Протвино lr=20576</label>
        <label id="20728" name="Королёв lr=20728" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20728">Королёв lr=20728</label>
        <label id="21619" name="Фрязино lr=21619" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21619">Фрязино lr=21619</label>
        <label id="21621" name="Реутов lr=21621" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21621">Реутов lr=21621</label>
        <label id="21630" name="Лыткарино lr=21630" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21630">Лыткарино lr=21630</label>
        <label id="21635" name="Лосино-Петровский lr=21635" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21635">Лосино-Петровский lr=21635</label>
        <label id="21641" name="Лобня lr=21641" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21641">Лобня lr=21641</label>
        <label id="21647" name="Краснознаменск lr=21647" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21647">Краснознаменск lr=21647</label>
        <label id="21735" name="Дзержинский lr=21735" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21735">Дзержинский lr=21735</label>
        <label id="98580" name="Волоколамский район lr=98580" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98580">Волоколамский район lr=98580</label>
        <label id="10721" name="Волоколамск lr=10721" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10721">Волоколамск lr=10721</label>
        <label id="98581" name="Воскресенский район lr=98581" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98581">Воскресенский район lr=98581</label>
        <label id="10722" name="Воскресенск lr=10722" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10722">Воскресенск lr=10722</label>
        <label id="21632" name="Белоозерский lr=21632" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21632">Белоозерский lr=21632</label>
        <label id="98582" name="Дмитровский городской округ lr=98582" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98582">Дмитровский городской округ lr=98582</label>
        <label id="10723" name="Дмитров lr=10723" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10723">Дмитров lr=10723</label>
        <label id="98584" name="Егорьевск (городской округ) lr=98584" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98584">Егорьевск (городской округ) lr=98584</label>
        <label id="10727" name="Егорьевск lr=10727" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10727">Егорьевск lr=10727</label>
        <label id="98585" name="Зарайск (городской округ) lr=98585" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98585">Зарайск (городской округ) lr=98585</label>
        <label id="10728" name="Зарайск lr=10728" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10728">Зарайск lr=10728</label>
        <label id="98586" name="Истра (городской округ) lr=98586" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98586">Истра (городской округ) lr=98586</label>
        <label id="10731" name="Истра lr=10731" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10731">Истра lr=10731</label>
        <label id="21627" name="Дедовск lr=21627" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21627">Дедовск lr=21627</label>
        <label id="98587" name="Кашира (городской округ) lr=98587" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98587">Кашира (городской округ) lr=98587</label>
        <label id="10732" name="Кашира lr=10732" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10732">Кашира lr=10732</label>
        <label id="98588" name="Клин (городской округ) lr=98588" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98588">Клин (городской округ) lr=98588</label>
        <label id="10733" name="Клин lr=10733" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10733">Клин lr=10733</label>
        <label id="98590" name="Красногорск (городской округ) lr=98590" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98590">Красногорск (городской округ) lr=98590</label>
        <label id="10735" name="Красногорск lr=10735" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10735">Красногорск lr=10735</label>
        <label id="21745" name="Нахабино lr=21745" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21745">Нахабино lr=21745</label>
        <label id="98591" name="Ленинский район lr=98591" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98591">Ленинский район lr=98591</label>
        <label id="10719" name="Видное lr=10719" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10719">Видное lr=10719</label>
        <label id="98593" name="Луховицы (городской округ) lr=98593" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98593">Луховицы (городской округ) lr=98593</label>
        <label id="10737" name="Луховицы lr=10737" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10737">Луховицы lr=10737</label>
        <label id="98594" name="Люберцы (городской округ) lr=98594" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98594">Люберцы (городской округ) lr=98594</label>
        <label id="10738" name="Люберцы lr=10738" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10738">Люберцы lr=10738</label>
        <label id="98595" name="Можайский (городской округ) lr=98595" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98595">Можайский (городской округ) lr=98595</label>
        <label id="10739" name="Можайск lr=10739" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10739">Можайск lr=10739</label>
        <label id="98596" name="Мытищи (городской округ) lr=98596" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98596">Мытищи (городской округ) lr=98596</label>
        <label id="10740" name="Мытищи lr=10740" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10740">Мытищи lr=10740</label>
        <label id="98597" name="Наро-Фоминский городской округ lr=98597" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98597">Наро-Фоминский городской округ lr=98597</label>
        <label id="10715" name="Апрелевка lr=10715" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10715">Апрелевка lr=10715</label>
        <label id="10741" name="Наро-Фоминск lr=10741" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10741">Наро-Фоминск lr=10741</label>
        <label id="98598" name="Богородский (городской округ) lr=98598" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98598">Богородский (городской округ) lr=98598</label>
        <label id="10742" name="Ногинск lr=10742" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10742">Ногинск lr=10742</label>
        <label id="21642" name="Электроугли lr=21642" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21642">Электроугли lr=21642</label>
        <label id="21656" name="Старая Купавна lr=21656" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21656">Старая Купавна lr=21656</label>
        <label id="98599" name="Одинцовский район lr=98599" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98599">Одинцовский район lr=98599</label>
        <label id="10743" name="Одинцово lr=10743" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10743">Одинцово lr=10743</label>
        <label id="21625" name="Кубинка lr=21625" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21625">Кубинка lr=21625</label>
        <label id="21646" name="Голицыно lr=21646" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21646">Голицыно lr=21646</label>
        <label id="98602" name="Павловский Посад (городской округ) lr=98602" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98602">Павловский Посад (городской округ) lr=98602</label>
        <label id="10746" name="Павловский Посад lr=10746" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10746">Павловский Посад lr=10746</label>
        <label id="98604" name="Пушкинский район lr=98604" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98604">Пушкинский район lr=98604</label>
        <label id="10748" name="Пушкино lr=10748" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10748">Пушкино lr=10748</label>
        <label id="21623" name="Ивантеевка lr=21623" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21623">Ивантеевка lr=21623</label>
        <label id="100471" name="Красноармейск lr=100471" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100471">Красноармейск lr=100471</label>
        <label id="98605" name="Раменский район lr=98605" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98605">Раменский район lr=98605</label>
        <label id="10750" name="Раменское lr=10750" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10750">Раменское lr=10750</label>
        <label id="98606" name="Рузский городской округ lr=98606" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98606">Рузский городской округ lr=98606</label>
        <label id="10751" name="Руза lr=10751" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10751">Руза lr=10751</label>
        <label id="98607" name="Ступино (городской округ) lr=98607" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98607">Ступино (городской округ) lr=98607</label>
        <label id="10756" name="Ступино lr=10756" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10756">Ступино lr=10756</label>
        <label id="98608" name="Сергиево-Посадский район lr=98608" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98608">Сергиево-Посадский район lr=98608</label>
        <label id="10752" name="Сергиев Посад lr=10752" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10752">Сергиев Посад lr=10752</label>
        <label id="21645" name="Хотьково lr=21645" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21645">Хотьково lr=21645</label>
        <label id="98611" name="Солнечногорский район lr=98611" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98611">Солнечногорский район lr=98611</label>
        <label id="10755" name="Солнечногорск lr=10755" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10755">Солнечногорск lr=10755</label>
        <label id="98614" name="Чехов (городской округ) lr=98614" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98614">Чехов (городской округ) lr=98614</label>
        <label id="10761" name="Чехов lr=10761" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10761">Чехов lr=10761</label>
        <label id="98615" name="Шатура (городской округ) lr=98615" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98615">Шатура (городской округ) lr=98615</label>
        <label id="10762" name="Шатура lr=10762" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10762">Шатура lr=10762</label>
        <label id="98617" name="Щёлковский район lr=98617" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98617">Щёлковский район lr=98617</label>
        <label id="10765" name="Щелково lr=10765" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10765">Щелково lr=10765</label>
        <label id="10645" name="Белгородская область lr=10645" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10645">Белгородская область lr=10645</label>
        <label id="4" name="Белгород lr=4" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="4">Белгород lr=4</label>
        <label id="10646" name="Губкин lr=10646" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10646">Губкин lr=10646</label>
        <label id="10649" name="Старый Оскол lr=10649" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10649">Старый Оскол lr=10649</label>
        <label id="98697" name="Алексеевский район lr=98697" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98697">Алексеевский район lr=98697</label>
        <label id="20192" name="Алексеевка lr=20192" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20192">Алексеевка lr=20192</label>
        <label id="98716" name="Шебекинский район lr=98716" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98716">Шебекинский район lr=98716</label>
        <label id="20196" name="Шебекино lr=20196" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20196">Шебекино lr=20196</label>
        <label id="98717" name="Яковлевский район lr=98717" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98717">Яковлевский район lr=98717</label>
        <label id="20587" name="Строитель lr=20587" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20587">Строитель lr=20587</label>
        <label id="10650" name="Брянская область lr=10650" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10650">Брянская область lr=10650</label>
        <label id="191" name="Брянск lr=191" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="191">Брянск lr=191</label>
        <label id="10653" name="Клинцы lr=10653" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10653">Клинцы lr=10653</label>
        <label id="10658" name="Владимирская область lr=10658" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10658">Владимирская область lr=10658</label>
        <label id="192" name="Владимир lr=192" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="192">Владимир lr=192</label>
        <label id="10661" name="Гусь-Хрустальный lr=10661" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10661">Гусь-Хрустальный lr=10661</label>
        <label id="10664" name="Ковров lr=10664" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10664">Ковров lr=10664</label>
        <label id="10668" name="Муром lr=10668" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10668">Муром lr=10668</label>
        <label id="98745" name="Александровский район lr=98745" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98745">Александровский район lr=98745</label>
        <label id="10656" name="Александров lr=10656" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10656">Александров lr=10656</label>
        <label id="98750" name="Киржачский район lr=98750" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98750">Киржачский район lr=98750</label>
        <label id="10663" name="Киржач lr=10663" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10663">Киржач lr=10663</label>
        <label id="98755" name="Петушинский район lr=98755" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98755">Петушинский район lr=98755</label>
        <label id="37129" name="Покров lr=37129" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="37129">Покров lr=37129</label>
        <label id="10672" name="Воронежская область lr=10672" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10672">Воронежская область lr=10672</label>
        <label id="193" name="Воронеж lr=193" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="193">Воронеж lr=193</label>
        <label id="98787" name="Россошанский район lr=98787" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98787">Россошанский район lr=98787</label>
        <label id="10681" name="Россошь lr=10681" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10681">Россошь lr=10681</label>
        <label id="10687" name="Ивановская область lr=10687" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10687">Ивановская область lr=10687</label>
        <label id="5" name="Иваново lr=5" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="5">Иваново lr=5</label>
        <label id="10689" name="Кинешма lr=10689" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10689">Кинешма lr=10689</label>
        <label id="10691" name="Шуя lr=10691" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10691">Шуя lr=10691</label>
        <label id="10693" name="Калужская область lr=10693" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10693">Калужская область lr=10693</label>
        <label id="6" name="Калуга lr=6" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="6">Калуга lr=6</label>
        <label id="967" name="Обнинск lr=967" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="967">Обнинск lr=967</label>
        <label id="98826" name="Малоярославецкий район lr=98826" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98826">Малоярославецкий район lr=98826</label>
        <label id="10697" name="Малоярославец lr=10697" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10697">Малоярославец lr=10697</label>
        <label id="10699" name="Костромская область lr=10699" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10699">Костромская область lr=10699</label>
        <label id="7" name="Кострома lr=7" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="7">Кострома lr=7</label>
        <label id="10705" name="Курская область lr=10705" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10705">Курская область lr=10705</label>
        <label id="8" name="Курск lr=8" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="8">Курск lr=8</label>
        <label id="10710" name="Железногорск lr=10710" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10710">Железногорск lr=10710</label>
        <label id="20707" name="Курчатов lr=20707" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20707">Курчатов lr=20707</label>
        <label id="10712" name="Липецкая область lr=10712" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10712">Липецкая область lr=10712</label>
        <label id="9" name="Липецк lr=9" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="9">Липецк lr=9</label>
        <label id="10713" name="Елец lr=10713" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10713">Елец lr=10713</label>
        <label id="10772" name="Орловская область lr=10772" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10772">Орловская область lr=10772</label>
        <label id="10" name="Орёл lr=10" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10">Орёл lr=10</label>
        <label id="10776" name="Рязанская область lr=10776" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10776">Рязанская область lr=10776</label>
        <label id="11" name="Рязань lr=11" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11">Рязань lr=11</label>
        <label id="10773" name="Касимов lr=10773" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10773">Касимов lr=10773</label>
        <label id="10795" name="Смоленская область lr=10795" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10795">Смоленская область lr=10795</label>
        <label id="12" name="Смоленск lr=12" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="12">Смоленск lr=12</label>
        <label id="98958" name="Вяземский район lr=98958" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98958">Вяземский район lr=98958</label>
        <label id="10782" name="Вязьма lr=10782" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10782">Вязьма lr=10782</label>
        <label id="98959" name="Гагаринский район lr=98959" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98959">Гагаринский район lr=98959</label>
        <label id="10783" name="Гагарин lr=10783" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10783">Гагарин lr=10783</label>
        <label id="98981" name="Ярцевский район lr=98981" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98981">Ярцевский район lr=98981</label>
        <label id="10801" name="Ярцево lr=10801" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10801">Ярцево lr=10801</label>
        <label id="10802" name="Тамбовская область lr=10802" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10802">Тамбовская область lr=10802</label>
        <label id="13" name="Тамбов lr=13" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="13">Тамбов lr=13</label>
        <label id="10803" name="Мичуринск lr=10803" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10803">Мичуринск lr=10803</label>
        <label id="10819" name="Тверская область lr=10819" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10819">Тверская область lr=10819</label>
        <label id="14" name="Тверь lr=14" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="14">Тверь lr=14</label>
        <label id="10807" name="Вышний Волочёк lr=10807" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10807">Вышний Волочёк lr=10807</label>
        <label id="10811" name="Кимры lr=10811" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10811">Кимры lr=10811</label>
        <label id="10820" name="Ржев lr=10820" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10820">Ржев lr=10820</label>
        <label id="99008" name="Бологовский район lr=99008" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99008">Бологовский район lr=99008</label>
        <label id="10805" name="Бологое lr=10805" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10805">Бологое lr=10805</label>
        <label id="99019" name="Конаковский район lr=99019" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99019">Конаковский район lr=99019</label>
        <label id="10812" name="Конаково lr=10812" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10812">Конаково lr=10812</label>
        <label id="99028" name="Осташковский район lr=99028" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99028">Осташковский район lr=99028</label>
        <label id="10818" name="Осташков lr=10818" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10818">Осташков lr=10818</label>
        <label id="99039" name="Удомельский район lr=99039" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99039">Удомельский район lr=99039</label>
        <label id="10824" name="Удомля lr=10824" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10824">Удомля lr=10824</label>
        <label id="10832" name="Тульская область lr=10832" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10832">Тульская область lr=10832</label>
        <label id="15" name="Тула lr=15" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="15">Тула lr=15</label>
        <label id="10828" name="Ефремов lr=10828" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10828">Ефремов lr=10828</label>
        <label id="10830" name="Новомосковск lr=10830" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10830">Новомосковск lr=10830</label>
        <label id="99044" name="Богородицкий район lr=99044" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99044">Богородицкий район lr=99044</label>
        <label id="20667" name="Богородицк lr=20667" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20667">Богородицк lr=20667</label>
        <label id="10841" name="Ярославская область lr=10841" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10841">Ярославская область lr=10841</label>
        <label id="16" name="Ярославль lr=16" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="16">Ярославль lr=16</label>
        <label id="10837" name="Переславль-Залесский lr=10837" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10837">Переславль-Залесский lr=10837</label>
        <label id="10839" name="Рыбинск lr=10839" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10839">Рыбинск lr=10839</label>
        <label id="99070" name="Мышкинский район lr=99070" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99070">Мышкинский район lr=99070</label>
        <label id="10836" name="Мышкин lr=10836" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10836">Мышкин lr=10836</label>
        <label id="99078" name="Тутаевский район lr=99078" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99078">Тутаевский район lr=99078</label>
        <label id="21154" name="Тутаев lr=21154" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21154">Тутаев lr=21154</label>
        <label id="99079" name="Угличский район lr=99079" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99079">Угличский район lr=99079</label>
        <label id="10840" name="Углич lr=10840" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10840">Углич lr=10840</label>
        <label id="17" name="Северо-Запад lr=17" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 4px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="17">Северо-Запад lr=17</label>
        <label id="10174" name="Санкт-Петербург и Ленинградская область lr=10174" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10174">Санкт-Петербург и Ленинградская область lr=10174</label>
        <label id="2" name="Санкт-Петербург lr=2" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="2">Санкт-Петербург lr=2</label>
        <label id="20293" name="Колпинский район lr=20293" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20293">Колпинский район lr=20293</label>
        <label id="26081" name="Колпино lr=26081" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 36px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="26081">Колпино lr=26081</label>
        <label id="20297" name="Пушкинский район lr=20297" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20297">Пушкинский район lr=20297</label>
        <label id="10884" name="Пушкин lr=10884" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 36px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10884">Пушкин lr=10884</label>
        <label id="10891" name="Сосновый Бор lr=10891" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10891">Сосновый Бор lr=10891</label>
        <label id="98620" name="Волховский район lr=98620" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98620">Волховский район lr=98620</label>
        <label id="10864" name="Волхов lr=10864" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10864">Волхов lr=10864</label>
        <label id="98621" name="Всеволожский район lr=98621" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98621">Всеволожский район lr=98621</label>
        <label id="10865" name="Всеволожск lr=10865" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10865">Всеволожск lr=10865</label>
        <label id="98622" name="Выборгский район lr=98622" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98622">Выборгский район lr=98622</label>
        <label id="969" name="Выборг lr=969" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="969">Выборг lr=969</label>
        <label id="98623" name="Гатчинский район lr=98623" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98623">Гатчинский район lr=98623</label>
        <label id="10867" name="Гатчина lr=10867" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10867">Гатчина lr=10867</label>
        <label id="98624" name="Кингисеппский район lr=98624" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98624">Кингисеппский район lr=98624</label>
        <label id="10870" name="Кингисепп lr=10870" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10870">Кингисепп lr=10870</label>
        <label id="98625" name="Киришский район lr=98625" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98625">Киришский район lr=98625</label>
        <label id="10871" name="Кириши lr=10871" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10871">Кириши lr=10871</label>
        <label id="98626" name="Кировский район lr=98626" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98626">Кировский район lr=98626</label>
        <label id="10872" name="Кировск lr=10872" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10872">Кировск lr=10872</label>
        <label id="98629" name="Лужский район lr=98629" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98629">Лужский район lr=98629</label>
        <label id="10876" name="Луга lr=10876" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10876">Луга lr=10876</label>
        <label id="98630" name="Подпорожский район lr=98630" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98630">Подпорожский район lr=98630</label>
        <label id="10881" name="Подпорожье lr=10881" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10881">Подпорожье lr=10881</label>
        <label id="22829" name="Вознесенье lr=22829" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="22829">Вознесенье lr=22829</label>
        <label id="98631" name="Приозерский район lr=98631" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98631">Приозерский район lr=98631</label>
        <label id="10883" name="Приозерск lr=10883" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10883">Приозерск lr=10883</label>
        <label id="98632" name="Сланцевский район lr=98632" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98632">Сланцевский район lr=98632</label>
        <label id="10888" name="Сланцы lr=10888" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10888">Сланцы lr=10888</label>
        <label id="98633" name="Тихвинский район lr=98633" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98633">Тихвинский район lr=98633</label>
        <label id="10892" name="Тихвин lr=10892" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10892">Тихвин lr=10892</label>
        <label id="98634" name="Тосненский район lr=98634" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="98634">Тосненский район lr=98634</label>
        <label id="10893" name="Тосно lr=10893" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10893">Тосно lr=10893</label>
        <label id="10176" name="Ненецкий автономный округ lr=10176" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10176">Ненецкий автономный округ lr=10176</label>
        <label id="10902" name="Нарьян-Мар lr=10902" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10902">Нарьян-Мар lr=10902</label>
        <label id="10842" name="Архангельская область lr=10842" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10842">Архангельская область lr=10842</label>
        <label id="20" name="Архангельск lr=20" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20">Архангельск lr=20</label>
        <label id="10846" name="Котлас lr=10846" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10846">Котлас lr=10846</label>
        <label id="10849" name="Северодвинск lr=10849" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10849">Северодвинск lr=10849</label>
        <label id="20117" name="Новодвинск lr=20117" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20117">Новодвинск lr=20117</label>
        <label id="10853" name="Вологодская область lr=10853" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10853">Вологодская область lr=10853</label>
        <label id="21" name="Вологда lr=21" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21">Вологда lr=21</label>
        <label id="968" name="Череповец lr=968" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="968">Череповец lr=968</label>
        <label id="99105" name="Великоустюгский район lr=99105" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99105">Великоустюгский район lr=99105</label>
        <label id="10854" name="Великий Устюг lr=10854" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10854">Великий Устюг lr=10854</label>
        <label id="10857" name="Калининградская область lr=10857" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10857">Калининградская область lr=10857</label>
        <label id="22" name="Калининград lr=22" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="22">Калининград lr=22</label>
        <label id="10860" name="Советск lr=10860" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10860">Советск lr=10860</label>
        <label id="20139" name="Зеленоградск lr=20139" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20139">Зеленоградск lr=20139</label>
        <label id="20144" name="Пионерский lr=20144" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20144">Пионерский lr=20144</label>
        <label id="10897" name="Мурманская область lr=10897" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10897">Мурманская область lr=10897</label>
        <label id="23" name="Мурманск lr=23" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="23">Мурманск lr=23</label>
        <label id="10894" name="Апатиты lr=10894" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10894">Апатиты lr=10894</label>
        <label id="10896" name="Мончегорск lr=10896" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10896">Мончегорск lr=10896</label>
        <label id="20155" name="Оленегорск lr=20155" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20155">Оленегорск lr=20155</label>
        <label id="101749" name="Кандалакшский район lr=101749" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="101749">Кандалакшский район lr=101749</label>
        <label id="10895" name="Кандалакша lr=10895" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10895">Кандалакша lr=10895</label>
        <label id="10904" name="Новгородская область lr=10904" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10904">Новгородская область lr=10904</label>
        <label id="24" name="Великий Новгород lr=24" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="24">Великий Новгород lr=24</label>
        <label id="99146" name="Боровичский район lr=99146" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99146">Боровичский район lr=99146</label>
        <label id="10906" name="Боровичи lr=10906" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10906">Боровичи lr=10906</label>
        <label id="99147" name="Валдайский район lr=99147" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99147">Валдайский район lr=99147</label>
        <label id="10907" name="Валдай lr=10907" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10907">Валдай lr=10907</label>
        <label id="99161" name="Старорусский район lr=99161" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99161">Старорусский район lr=99161</label>
        <label id="10923" name="Старая Русса lr=10923" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10923">Старая Русса lr=10923</label>
        <label id="10926" name="Псковская область lr=10926" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10926">Псковская область lr=10926</label>
        <label id="25" name="Псков lr=25" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="25">Псков lr=25</label>
        <label id="10928" name="Великие Луки lr=10928" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10928">Великие Луки lr=10928</label>
        <label id="10933" name="Республика Карелия lr=10933" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10933">Республика Карелия lr=10933</label>
        <label id="18" name="Петрозаводск lr=18" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="18">Петрозаводск lr=18</label>
        <label id="10935" name="Костомукша lr=10935" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10935">Костомукша lr=10935</label>
        <label id="99193" name="Кондопожский район lr=99193" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99193">Кондопожский район lr=99193</label>
        <label id="10934" name="Кондопога lr=10934" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10934">Кондопога lr=10934</label>
        <label id="99203" name="Сегежский район lr=99203" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99203">Сегежский район lr=99203</label>
        <label id="10936" name="Сегежа lr=10936" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10936">Сегежа lr=10936</label>
        <label id="110934" name="Сортавальский район lr=110934" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="110934">Сортавальский район lr=110934</label>
        <label id="10937" name="Сортавала lr=10937" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10937">Сортавала lr=10937</label>
        <label id="10939" name="Республика Коми lr=10939" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10939">Республика Коми lr=10939</label>
        <label id="19" name="Сыктывкар lr=19" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="19">Сыктывкар lr=19</label>
        <label id="10940" name="Воркута lr=10940" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10940">Воркута lr=10940</label>
        <label id="10941" name="Инта lr=10941" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10941">Инта lr=10941</label>
        <label id="10944" name="Усинск lr=10944" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10944">Усинск lr=10944</label>
        <label id="10945" name="Ухта lr=10945" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10945">Ухта lr=10945</label>
        <label id="99210" name="Район Печора lr=99210" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99210">Район Печора lr=99210</label>
        <label id="10942" name="Печора lr=10942" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10942">Печора lr=10942</label>
        <label id="26" name="Юг lr=26" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 4px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="26">Юг lr=26</label>
        <label id="10946" name="Астраханская область lr=10946" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10946">Астраханская область lr=10946</label>
        <label id="37" name="Астрахань lr=37" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="37">Астрахань lr=37</label>
        <label id="99221" name="Ахтубинский район lr=99221" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99221">Ахтубинский район lr=99221</label>
        <label id="20167" name="Ахтубинск lr=20167" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20167">Ахтубинск lr=20167</label>
        <label id="10950" name="Волгоградская область lr=10950" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10950">Волгоградская область lr=10950</label>
        <label id="38" name="Волгоград lr=38" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="38">Волгоград lr=38</label>
        <label id="10951" name="Волжский lr=10951" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10951">Волжский lr=10951</label>
        <label id="10959" name="Камышин lr=10959" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10959">Камышин lr=10959</label>
        <label id="10965" name="Михайловка lr=10965" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10965">Михайловка lr=10965</label>
        <label id="10981" name="Урюпинск lr=10981" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10981">Урюпинск lr=10981</label>
        <label id="10995" name="Краснодарский край lr=10995" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10995">Краснодарский край lr=10995</label>
        <label id="35" name="Краснодар lr=35" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="35">Краснодар lr=35</label>
        <label id="239" name="Сочи lr=239" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="239">Сочи lr=239</label>
        <label id="970" name="Новороссийск lr=970" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="970">Новороссийск lr=970</label>
        <label id="1107" name="Анапа lr=1107" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="1107">Анапа lr=1107</label>
        <label id="10987" name="Армавир lr=10987" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10987">Армавир lr=10987</label>
        <label id="10990" name="Геленджик lr=10990" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10990">Геленджик lr=10990</label>
        <label id="99269" name="Белореченский район lr=99269" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99269">Белореченский район lr=99269</label>
        <label id="10988" name="Белореченск lr=10988" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10988">Белореченск lr=10988</label>
        <label id="99274" name="Ейский район lr=99274" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99274">Ейский район lr=99274</label>
        <label id="10993" name="Ейск lr=10993" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10993">Ейск lr=10993</label>
        <label id="99275" name="Кавказский район lr=99275" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99275">Кавказский район lr=99275</label>
        <label id="10996" name="Кропоткин lr=10996" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10996">Кропоткин lr=10996</label>
        <label id="99281" name="Крымский район lr=99281" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99281">Крымский район lr=99281</label>
        <label id="10997" name="Крымск lr=10997" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10997">Крымск lr=10997</label>
        <label id="99293" name="Славянский район lr=99293" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99293">Славянский район lr=99293</label>
        <label id="20704" name="Славянск-на-Кубани lr=20704" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20704">Славянск-на-Кубани lr=20704</label>
        <label id="99297" name="Тимашевский район lr=99297" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99297">Тимашевский район lr=99297</label>
        <label id="21141" name="Тимашевск lr=21141" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21141">Тимашевск lr=21141</label>
        <label id="99298" name="Тихорецкий район lr=99298" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99298">Тихорецкий район lr=99298</label>
        <label id="11002" name="Тихорецк lr=11002" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11002">Тихорецк lr=11002</label>
        <label id="99299" name="Туапсинский район lr=99299" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99299">Туапсинский район lr=99299</label>
        <label id="1058" name="Туапсе lr=1058" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="1058">Туапсе lr=1058</label>
        <label id="11004" name="Республика Адыгея lr=11004" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11004">Республика Адыгея lr=11004</label>
        <label id="1093" name="Майкоп lr=1093" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="1093">Майкоп lr=1093</label>
        <label id="11015" name="Республика Калмыкия lr=11015" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11015">Республика Калмыкия lr=11015</label>
        <label id="1094" name="Элиста lr=1094" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="1094">Элиста lr=1094</label>
        <label id="11029" name="Ростовская область lr=11029" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11029">Ростовская область lr=11029</label>
        <label id="39" name="Ростов-на-Дону lr=39" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="39">Ростов-на-Дону lr=39</label>
        <label id="238" name="Новочеркасск lr=238" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="238">Новочеркасск lr=238</label>
        <label id="971" name="Таганрог lr=971" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="971">Таганрог lr=971</label>
        <label id="11030" name="Азов lr=11030" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11030">Азов lr=11030</label>
        <label id="11033" name="Батайск lr=11033" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11033">Батайск lr=11033</label>
        <label id="11036" name="Волгодонск lr=11036" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11036">Волгодонск lr=11036</label>
        <label id="11037" name="Гуково lr=11037" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11037">Гуково lr=11037</label>
        <label id="11043" name="Каменск-Шахтинский lr=11043" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11043">Каменск-Шахтинский lr=11043</label>
        <label id="11049" name="Новошахтинск lr=11049" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11049">Новошахтинск lr=11049</label>
        <label id="11053" name="Шахты lr=11053" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11053">Шахты lr=11053</label>
        <label id="99411" name="Белокалитвинский район lr=99411" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99411">Белокалитвинский район lr=99411</label>
        <label id="11034" name="Белая Калитва lr=11034" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11034">Белая Калитва lr=11034</label>
        <label id="40" name="Поволжье lr=40" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 4px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="40">Поволжье lr=40</label>
        <label id="11070" name="Кировская область lr=11070" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11070">Кировская область lr=11070</label>
        <label id="46" name="Киров lr=46" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="46">Киров lr=46</label>
        <label id="11071" name="Кирово-Чепецк lr=11071" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11071">Кирово-Чепецк lr=11071</label>
        <label id="20020" name="Вятские Поляны lr=20020" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20020">Вятские Поляны lr=20020</label>
        <label id="11077" name="Республика Марий Эл lr=11077" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11077">Республика Марий Эл lr=11077</label>
        <label id="41" name="Йошкар-Ола lr=41" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="41">Йошкар-Ола lr=41</label>
        <label id="20721" name="Волжск lr=20721" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20721">Волжск lr=20721</label>
        <label id="11079" name="Нижегородская область lr=11079" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11079">Нижегородская область lr=11079</label>
        <label id="47" name="Нижний Новгород lr=47" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="47">Нижний Новгород lr=47</label>
        <label id="972" name="Дзержинск (Нижегородская область) lr=972" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="972">Дзержинск (Нижегородская область) lr=972</label>
        <label id="11080" name="Арзамас lr=11080" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11080">Арзамас lr=11080</label>
        <label id="11083" name="Саров lr=11083" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11083">Саров lr=11083</label>
        <label id="20040" name="Выкса lr=20040" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20040">Выкса lr=20040</label>
        <label id="99555" name="Кстовский район lr=99555" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99555">Кстовский район lr=99555</label>
        <label id="20044" name="Кстово lr=20044" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20044">Кстово lr=20044</label>
        <label id="99560" name="Павловский район lr=99560" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99560">Павловский район lr=99560</label>
        <label id="11082" name="Павлово lr=11082" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11082">Павлово lr=11082</label>
        <label id="11084" name="Оренбургская область lr=11084" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11084">Оренбургская область lr=11084</label>
        <label id="48" name="Оренбург lr=48" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="48">Оренбург lr=48</label>
        <label id="11086" name="Бузулук lr=11086" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11086">Бузулук lr=11086</label>
        <label id="11087" name="Гай lr=11087" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11087">Гай lr=11087</label>
        <label id="11090" name="Новотроицк lr=11090" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11090">Новотроицк lr=11090</label>
        <label id="11091" name="Орск lr=11091" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11091">Орск lr=11091</label>
        <label id="11095" name="Пензенская область lr=11095" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11095">Пензенская область lr=11095</label>
        <label id="49" name="Пенза lr=49" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="49">Пенза lr=49</label>
        <label id="11101" name="Кузнецк lr=11101" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11101">Кузнецк lr=11101</label>
        <label id="11108" name="Пермский край lr=11108" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11108">Пермский край lr=11108</label>
        <label id="50" name="Пермь lr=50" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="50">Пермь lr=50</label>
        <label id="11110" name="Соликамск lr=11110" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11110">Соликамск lr=11110</label>
        <label id="20237" name="Березники lr=20237" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20237">Березники lr=20237</label>
        <label id="20244" name="Лысьва lr=20244" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20244">Лысьва lr=20244</label>
        <label id="110916" name="Чайковский район lr=110916" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="110916">Чайковский район lr=110916</label>
        <label id="20243" name="Чайковский lr=20243" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20243">Чайковский lr=20243</label>
        <label id="11111" name="Республика Башкортостан lr=11111" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11111">Республика Башкортостан lr=11111</label>
        <label id="172" name="Уфа lr=172" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="172">Уфа lr=172</label>
        <label id="11113" name="Кумертау lr=11113" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11113">Кумертау lr=11113</label>
        <label id="11114" name="Нефтекамск lr=11114" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11114">Нефтекамск lr=11114</label>
        <label id="11115" name="Салават lr=11115" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11115">Салават lr=11115</label>
        <label id="11116" name="Стерлитамак lr=11116" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11116">Стерлитамак lr=11116</label>
        <label id="20235" name="Октябрьский lr=20235" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20235">Октябрьский lr=20235</label>
        <label id="20716" name="Сибай lr=20716" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20716">Сибай lr=20716</label>
        <label id="99675" name="Белебеевский район lr=99675" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99675">Белебеевский район lr=99675</label>
        <label id="20714" name="Белебей lr=20714" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20714">Белебей lr=20714</label>
        <label id="99677" name="Белорецкий район lr=99677" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99677">Белорецкий район lr=99677</label>
        <label id="20259" name="Белорецк lr=20259" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20259">Белорецк lr=20259</label>
        <label id="99694" name="Ишимбайский район lr=99694" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99694">Ишимбайский район lr=99694</label>
        <label id="20718" name="Ишимбай lr=20718" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20718">Ишимбай lr=20718</label>
        <label id="99703" name="Мелеузовский район lr=99703" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99703">Мелеузовский район lr=99703</label>
        <label id="20715" name="Мелеуз lr=20715" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20715">Мелеуз lr=20715</label>
        <label id="99712" name="Туймазинский район lr=99712" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99712">Туймазинский район lr=99712</label>
        <label id="20717" name="Туймазы lr=20717" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20717">Туймазы lr=20717</label>
        <label id="99714" name="Учалинский район lr=99714" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99714">Учалинский район lr=99714</label>
        <label id="20680" name="Учалы lr=20680" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20680">Учалы lr=20680</label>
        <label id="11117" name="Республика Мордовия lr=11117" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11117">Республика Мордовия lr=11117</label>
        <label id="42" name="Саранск lr=42" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="42">Саранск lr=42</label>
        <label id="99737" name="Рузаевский район lr=99737" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99737">Рузаевский район lr=99737</label>
        <label id="20010" name="Рузаевка lr=20010" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20010">Рузаевка lr=20010</label>
        <label id="11119" name="Республика Татарстан lr=11119" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11119">Республика Татарстан lr=11119</label>
        <label id="43" name="Казань lr=43" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="43">Казань lr=43</label>
        <label id="236" name="Набережные Челны lr=236" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="236">Набережные Челны lr=236</label>
        <label id="11121" name="Альметьевск lr=11121" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11121">Альметьевск lr=11121</label>
        <label id="11122" name="Бугульма lr=11122" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11122">Бугульма lr=11122</label>
        <label id="11127" name="Нижнекамск lr=11127" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11127">Нижнекамск lr=11127</label>
        <label id="11129" name="Чистополь lr=11129" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11129">Чистополь lr=11129</label>
        <label id="11131" name="Самарская область lr=11131" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11131">Самарская область lr=11131</label>
        <label id="51" name="Самара lr=51" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="51">Самара lr=51</label>
        <label id="240" name="Тольятти lr=240" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="240">Тольятти lr=240</label>
        <label id="11132" name="Жигулёвск lr=11132" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11132">Жигулёвск lr=11132</label>
        <label id="11135" name="Новокуйбышевск lr=11135" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11135">Новокуйбышевск lr=11135</label>
        <label id="11139" name="Сызрань lr=11139" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11139">Сызрань lr=11139</label>
        <label id="11146" name="Саратовская область lr=11146" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11146">Саратовская область lr=11146</label>
        <label id="194" name="Саратов lr=194" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="194">Саратов lr=194</label>
        <label id="99817" name="Балаковский район lr=99817" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99817">Балаковский район lr=99817</label>
        <label id="11143" name="Балаково lr=11143" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11143">Балаково lr=11143</label>
        <label id="99818" name="Балашовский район lr=99818" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99818">Балашовский район lr=99818</label>
        <label id="11144" name="Балашов lr=11144" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11144">Балашов lr=11144</label>
        <label id="99832" name="Марксовский район lr=99832" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99832">Марксовский район lr=99832</label>
        <label id="20063" name="Маркс lr=20063" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20063">Маркс lr=20063</label>
        <label id="99850" name="Энгельсский район lr=99850" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99850">Энгельсский район lr=99850</label>
        <label id="11147" name="Энгельс lr=11147" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11147">Энгельс lr=11147</label>
        <label id="11148" name="Удмуртская Республика lr=11148" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11148">Удмуртская Республика lr=11148</label>
        <label id="44" name="Ижевск lr=44" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="44">Ижевск lr=44</label>
        <label id="11149" name="Воткинск lr=11149" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11149">Воткинск lr=11149</label>
        <label id="11150" name="Глазов lr=11150" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11150">Глазов lr=11150</label>
        <label id="11152" name="Сарапул lr=11152" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11152">Сарапул lr=11152</label>
        <label id="11153" name="Ульяновская область lr=11153" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11153">Ульяновская область lr=11153</label>
        <label id="195" name="Ульяновск lr=195" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="195">Ульяновск lr=195</label>
        <label id="11155" name="Димитровград lr=11155" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11155">Димитровград lr=11155</label>
        <label id="20070" name="Новоульяновск lr=20070" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20070">Новоульяновск lr=20070</label>
        <label id="11156" name="Чувашская Республика lr=11156" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11156">Чувашская Республика lr=11156</label>
        <label id="45" name="Чебоксары lr=45" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="45">Чебоксары lr=45</label>
        <label id="20078" name="Шумерля lr=20078" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20078">Шумерля lr=20078</label>
        <label id="37133" name="Новочебоксарск lr=37133" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="37133">Новочебоксарск lr=37133</label>
        <label id="52" name="Урал lr=52" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 4px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="52">Урал lr=52</label>
        <label id="11158" name="Курганская область lr=11158" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11158">Курганская область lr=11158</label>
        <label id="53" name="Курган lr=53" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="53">Курган lr=53</label>
        <label id="11159" name="Шадринск lr=11159" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11159">Шадринск lr=11159</label>
        <label id="11162" name="Свердловская область lr=11162" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11162">Свердловская область lr=11162</label>
        <label id="54" name="Екатеринбург lr=54" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="54">Екатеринбург lr=54</label>
        <label id="11160" name="Асбест lr=11160" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11160">Асбест lr=11160</label>
        <label id="11161" name="Верхняя Салда lr=11161" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11161">Верхняя Салда lr=11161</label>
        <label id="11164" name="Каменск-Уральский lr=11164" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11164">Каменск-Уральский lr=11164</label>
        <label id="11165" name="Краснотурьинск lr=11165" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11165">Краснотурьинск lr=11165</label>
        <label id="11166" name="Кушва lr=11166" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11166">Кушва lr=11166</label>
        <label id="11167" name="Лесной lr=11167" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11167">Лесной lr=11167</label>
        <label id="11168" name="Нижний Тагил lr=11168" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11168">Нижний Тагил lr=11168</label>
        <label id="11169" name="Нижняя Тура lr=11169" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11169">Нижняя Тура lr=11169</label>
        <label id="11170" name="Новоуральск lr=11170" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11170">Новоуральск lr=11170</label>
        <label id="11171" name="Первоуральск lr=11171" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11171">Первоуральск lr=11171</label>
        <label id="11172" name="Серов lr=11172" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11172">Серов lr=11172</label>
        <label id="20224" name="Ревда lr=20224" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20224">Ревда lr=20224</label>
        <label id="20234" name="Качканар lr=20234" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20234">Качканар lr=20234</label>
        <label id="20579" name="Белоярский lr=20579" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20579">Белоярский lr=20579</label>
        <label id="20654" name="Невьянск lr=20654" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20654">Невьянск lr=20654</label>
        <label id="20672" name="Североуральск lr=20672" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20672">Североуральск lr=20672</label>
        <label id="20684" name="Реж lr=20684" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20684">Реж lr=20684</label>
        <label id="20691" name="Красноуфимск lr=20691" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20691">Красноуфимск lr=20691</label>
        <label id="20720" name="Верхняя Пышма lr=20720" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20720">Верхняя Пышма lr=20720</label>
        <label id="21726" name="Полевской lr=21726" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21726">Полевской lr=21726</label>
        <label id="29397" name="Берёзовский (Свердловская область) lr=29397" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="29397">Берёзовский (Свердловская область) lr=29397</label>
        <label id="11176" name="Тюменская область lr=11176" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11176">Тюменская область lr=11176</label>
        <label id="55" name="Тюмень lr=55" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="55">Тюмень lr=55</label>
        <label id="11173" name="Ишим lr=11173" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11173">Ишим lr=11173</label>
        <label id="11175" name="Тобольск lr=11175" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11175">Тобольск lr=11175</label>
        <label id="11178" name="Ялуторовск lr=11178" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11178">Ялуторовск lr=11178</label>
        <label id="11193" name="Ханты-Мансийский автономный округ - Югра lr=11193" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11193">Ханты-Мансийский автономный округ - Югра lr=11193</label>
        <label id="57" name="Ханты-Мансийск lr=57" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="57">Ханты-Мансийск lr=57</label>
        <label id="973" name="Сургут lr=973" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="973">Сургут lr=973</label>
        <label id="1091" name="Нижневартовск lr=1091" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="1091">Нижневартовск lr=1091</label>
        <label id="11177" name="Югорск lr=11177" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11177">Югорск lr=11177</label>
        <label id="11180" name="Когалым lr=11180" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11180">Когалым lr=11180</label>
        <label id="11181" name="Лангепас lr=11181" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11181">Лангепас lr=11181</label>
        <label id="11182" name="Мегион lr=11182" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11182">Мегион lr=11182</label>
        <label id="11184" name="Нефтеюганск lr=11184" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11184">Нефтеюганск lr=11184</label>
        <label id="11186" name="Нягань lr=11186" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11186">Нягань lr=11186</label>
        <label id="11188" name="Пыть-Ях lr=11188" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11188">Пыть-Ях lr=11188</label>
        <label id="11189" name="Радужный lr=11189" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11189">Радужный lr=11189</label>
        <label id="11192" name="Урай lr=11192" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11192">Урай lr=11192</label>
        <label id="11225" name="Челябинская область lr=11225" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11225">Челябинская область lr=11225</label>
        <label id="56" name="Челябинск lr=56" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="56">Челябинск lr=56</label>
        <label id="235" name="Магнитогорск lr=235" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="235">Магнитогорск lr=235</label>
        <label id="11200" name="Верхний Уфалей lr=11200" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11200">Верхний Уфалей lr=11200</label>
        <label id="11202" name="Златоуст lr=11202" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11202">Златоуст lr=11202</label>
        <label id="11207" name="Копейск lr=11207" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11207">Копейск lr=11207</label>
        <label id="11212" name="Миасс lr=11212" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11212">Миасс lr=11212</label>
        <label id="11214" name="Озёрск lr=11214" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11214">Озёрск lr=11214</label>
        <label id="11218" name="Снежинск lr=11218" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11218">Снежинск lr=11218</label>
        <label id="11220" name="Троицк lr=11220" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11220">Троицк lr=11220</label>
        <label id="11223" name="Усть-Катав lr=11223" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11223">Усть-Катав lr=11223</label>
        <label id="11224" name="Чебаркуль lr=11224" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11224">Чебаркуль lr=11224</label>
        <label id="11227" name="Южноуральск lr=11227" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11227">Южноуральск lr=11227</label>
        <label id="100005" name="Ашинский район lr=100005" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100005">Ашинский район lr=100005</label>
        <label id="11196" name="Аша lr=11196" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11196">Аша lr=11196</label>
        <label id="100020" name="Саткинский район lr=100020" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100020">Саткинский район lr=100020</label>
        <label id="11217" name="Сатка lr=11217" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11217">Сатка lr=11217</label>
        <label id="11232" name="Ямало-Ненецкий автономный округ lr=11232" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11232">Ямало-Ненецкий автономный округ lr=11232</label>
        <label id="58" name="Салехард lr=58" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="58">Салехард lr=58</label>
        <label id="11228" name="Губкинский lr=11228" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11228">Губкинский lr=11228</label>
        <label id="11230" name="Новый Уренгой lr=11230" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11230">Новый Уренгой lr=11230</label>
        <label id="11231" name="Ноябрьск lr=11231" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11231">Ноябрьск lr=11231</label>
        <label id="100028" name="Надымский район lr=100028" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100028">Надымский район lr=100028</label>
        <label id="11229" name="Надым lr=11229" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11229">Надым lr=11229</label>
        <label id="59" name="Сибирь lr=59" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 4px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="59">Сибирь lr=59</label>
        <label id="10231" name="Республика Алтай lr=10231" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10231">Республика Алтай lr=10231</label>
        <label id="11319" name="Горно-Алтайск lr=11319" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11319">Горно-Алтайск lr=11319</label>
        <label id="10233" name="Республика Тыва lr=10233" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10233">Республика Тыва lr=10233</label>
        <label id="11333" name="Кызыл lr=11333" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11333">Кызыл lr=11333</label>
        <label id="11235" name="Алтайский край lr=11235" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11235">Алтайский край lr=11235</label>
        <label id="197" name="Барнаул lr=197" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="197">Барнаул lr=197</label>
        <label id="975" name="Бийск lr=975" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="975">Бийск lr=975</label>
        <label id="11240" name="Заринск lr=11240" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11240">Заринск lr=11240</label>
        <label id="11246" name="Новоалтайск lr=11246" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11246">Новоалтайск lr=11246</label>
        <label id="11251" name="Рубцовск lr=11251" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11251">Рубцовск lr=11251</label>
        <label id="11266" name="Иркутская область lr=11266" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11266">Иркутская область lr=11266</label>
        <label id="63" name="Иркутск lr=63" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="63">Иркутск lr=63</label>
        <label id="976" name="Братск lr=976" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="976">Братск lr=976</label>
        <label id="11256" name="Ангарск lr=11256" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11256">Ангарск lr=11256</label>
        <label id="11271" name="Тулун lr=11271" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11271">Тулун lr=11271</label>
        <label id="11272" name="Усолье-Сибирское lr=11272" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11272">Усолье-Сибирское lr=11272</label>
        <label id="11273" name="Усть-Илимск lr=11273" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11273">Усть-Илимск lr=11273</label>
        <label id="11274" name="Черемхово lr=11274" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11274">Черемхово lr=11274</label>
        <label id="100109" name="Нижнеудинский район lr=100109" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100109">Нижнеудинский район lr=100109</label>
        <label id="11268" name="Нижнеудинск lr=11268" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11268">Нижнеудинск lr=11268</label>
        <label id="100112" name="Тайшетский район lr=100112" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100112">Тайшетский район lr=100112</label>
        <label id="11270" name="Тайшет lr=11270" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11270">Тайшет lr=11270</label>
        <label id="100116" name="Усть-Кутский район lr=100116" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100116">Усть-Кутский район lr=100116</label>
        <label id="20097" name="Усть-Кут lr=20097" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20097">Усть-Кут lr=20097</label>
        <label id="11282" name="Кемеровская область (Кузбасс) lr=11282" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11282">Кемеровская область (Кузбасс) lr=11282</label>
        <label id="64" name="Кемерово lr=64" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="64">Кемерово lr=64</label>
        <label id="237" name="Новокузнецк lr=237" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="237">Новокузнецк lr=237</label>
        <label id="11276" name="Анжеро-Судженск lr=11276" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11276">Анжеро-Судженск lr=11276</label>
        <label id="11277" name="Белово lr=11277" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11277">Белово lr=11277</label>
        <label id="11278" name="Берёзовский (Кемеровская область) lr=11278" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11278">Берёзовский (Кемеровская область) lr=11278</label>
        <label id="11283" name="Киселёвск lr=11283" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11283">Киселёвск lr=11283</label>
        <label id="11285" name="Ленинск-Кузнецкий lr=11285" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11285">Ленинск-Кузнецкий lr=11285</label>
        <label id="11287" name="Междуреченск lr=11287" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11287">Междуреченск lr=11287</label>
        <label id="11288" name="Мыски lr=11288" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11288">Мыски lr=11288</label>
        <label id="11291" name="Прокопьевск lr=11291" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11291">Прокопьевск lr=11291</label>
        <label id="11292" name="Полысаево lr=11292" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11292">Полысаево lr=11292</label>
        <label id="11299" name="Юрга lr=11299" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11299">Юрга lr=11299</label>
        <label id="11309" name="Красноярский край lr=11309" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11309">Красноярский край lr=11309</label>
        <label id="62" name="Красноярск lr=62" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="62">Красноярск lr=62</label>
        <label id="11302" name="Ачинск lr=11302" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11302">Ачинск lr=11302</label>
        <label id="11304" name="Енисейск lr=11304" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11304">Енисейск lr=11304</label>
        <label id="11310" name="Минусинск lr=11310" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11310">Минусинск lr=11310</label>
        <label id="11311" name="Норильск lr=11311" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11311">Норильск lr=11311</label>
        <label id="20086" name="Железногорск lr=20086" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20086">Железногорск lr=20086</label>
        <label id="20088" name="Зеленогорск lr=20088" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20088">Зеленогорск lr=20088</label>
        <label id="11316" name="Новосибирская область lr=11316" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11316">Новосибирская область lr=11316</label>
        <label id="65" name="Новосибирск lr=65" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="65">Новосибирск lr=65</label>
        <label id="11314" name="Бердск lr=11314" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11314">Бердск lr=11314</label>
        <label id="20100" name="Искитим lr=20100" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20100">Искитим lr=20100</label>
        <label id="100183" name="Барабинский район lr=100183" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100183">Барабинский район lr=100183</label>
        <label id="20098" name="Барабинск lr=20098" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20098">Барабинск lr=20098</label>
        <label id="100189" name="Карасукский район lr=100189" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100189">Карасукский район lr=100189</label>
        <label id="20101" name="Карасук lr=20101" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20101">Карасук lr=20101</label>
        <label id="11318" name="Омская область lr=11318" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11318">Омская область lr=11318</label>
        <label id="66" name="Омск lr=66" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="66">Омск lr=66</label>
        <label id="11340" name="Республика Хакасия lr=11340" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11340">Республика Хакасия lr=11340</label>
        <label id="1095" name="Абакан lr=1095" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="1095">Абакан lr=1095</label>
        <label id="11353" name="Томская область lr=11353" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11353">Томская область lr=11353</label>
        <label id="67" name="Томск lr=67" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="67">Томск lr=67</label>
        <label id="11351" name="Северск lr=11351" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11351">Северск lr=11351</label>
        <label id="11352" name="Стрежевой lr=11352" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11352">Стрежевой lr=11352</label>
        <label id="100278" name="Каргасокский район lr=100278" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100278">Каргасокский район lr=100278</label>
        <label id="21675" name="Каргасок lr=21675" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21675">Каргасок lr=21675</label>
        <label id="100280" name="Колпашевский район lr=100280" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100280">Колпашевский район lr=100280</label>
        <label id="11349" name="Колпашево lr=11349" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11349">Колпашево lr=11349</label>
        <label id="73" name="Дальний Восток lr=73" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 4px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="73">Дальний Восток lr=73</label>
        <label id="10243" name="Еврейская автономная область lr=10243" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10243">Еврейская автономная область lr=10243</label>
        <label id="11393" name="Биробиджан lr=11393" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11393">Биробиджан lr=11393</label>
        <label id="10251" name="Чукотский автономный округ lr=10251" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="10251">Чукотский автономный округ lr=10251</label>
        <label id="11330" name="Республика Бурятия lr=11330" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11330">Республика Бурятия lr=11330</label>
        <label id="198" name="Улан-Удэ lr=198" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="198">Улан-Удэ lr=198</label>
        <label id="11327" name="Северобайкальск lr=11327" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11327">Северобайкальск lr=11327</label>
        <label id="100244" name="Баргузинский район lr=100244" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100244">Баргузинский район lr=100244</label>
        <label id="21161" name="Усть-Баргузин lr=21161" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21161">Усть-Баргузин lr=21161</label>
        <label id="11375" name="Амурская область lr=11375" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11375">Амурская область lr=11375</label>
        <label id="77" name="Благовещенск lr=77" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="77">Благовещенск lr=77</label>
        <label id="11374" name="Белогорск lr=11374" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11374">Белогорск lr=11374</label>
        <label id="11387" name="Свободный lr=11387" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11387">Свободный lr=11387</label>
        <label id="11391" name="Тында lr=11391" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11391">Тында lr=11391</label>
        <label id="11398" name="Камчатский край lr=11398" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11398">Камчатский край lr=11398</label>
        <label id="78" name="Петропавловск-Камчатский lr=78" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="78">Петропавловск-Камчатский lr=78</label>
        <label id="11403" name="Магаданская область lr=11403" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11403">Магаданская область lr=11403</label>
        <label id="79" name="Магадан lr=79" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="79">Магадан lr=79</label>
        <label id="11409" name="Приморский край lr=11409" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11409">Приморский край lr=11409</label>
        <label id="75" name="Владивосток lr=75" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="75">Владивосток lr=75</label>
        <label id="974" name="Находка lr=974" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="974">Находка lr=974</label>
        <label id="11405" name="Арсеньев lr=11405" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11405">Арсеньев lr=11405</label>
        <label id="11406" name="Артём lr=11406" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11406">Артём lr=11406</label>
        <label id="11411" name="Дальнегорск lr=11411" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11411">Дальнегорск lr=11411</label>
        <label id="11425" name="Спасск-Дальний lr=11425" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11425">Спасск-Дальний lr=11425</label>
        <label id="11426" name="Уссурийск lr=11426" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11426">Уссурийск lr=11426</label>
        <label id="11443" name="Республика Саха (Якутия) lr=11443" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11443">Республика Саха (Якутия) lr=11443</label>
        <label id="74" name="Якутск lr=74" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="74">Якутск lr=74</label>
        <label id="101987" name="Нерюнгринский район lr=101987" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="101987">Нерюнгринский район lr=101987</label>
        <label id="11437" name="Нерюнгри lr=11437" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11437">Нерюнгри lr=11437</label>
        <label id="11450" name="Сахалинская область lr=11450" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11450">Сахалинская область lr=11450</label>
        <label id="80" name="Южно-Сахалинск lr=80" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="80">Южно-Сахалинск lr=80</label>
        <label id="20160" name="Невельск lr=20160" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20160">Невельск lr=20160</label>
        <label id="11457" name="Хабаровский край lr=11457" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11457">Хабаровский край lr=11457</label>
        <label id="76" name="Хабаровск lr=76" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="76">Хабаровск lr=76</label>
        <label id="11453" name="Комсомольск-на-Амуре lr=11453" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11453">Комсомольск-на-Амуре lr=11453</label>
        <label id="100398" name="Амурский район lr=100398" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="100398">Амурский район lr=100398</label>
        <label id="11451" name="Амурск lr=11451" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11451">Амурск lr=11451</label>
        <label id="21949" name="Забайкальский край lr=21949" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21949">Забайкальский край lr=21949</label>
        <label id="68" name="Чита lr=68" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="68">Чита lr=68</label>
        <label id="977" name="Республика Крым lr=977" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 4px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="977">Республика Крым lr=977</label>
        <label id="146" name="Симферополь lr=146" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="146">Симферополь lr=146</label>
        <label id="959" name="Севастополь lr=959" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="959">Севастополь lr=959</label>
        <label id="11463" name="Евпатория lr=11463" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11463">Евпатория lr=11463</label>
        <label id="11464" name="Керчь lr=11464" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11464">Керчь lr=11464</label>
        <label id="11469" name="Феодосия lr=11469" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11469">Феодосия lr=11469</label>
        <label id="11470" name="Ялта lr=11470" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11470">Ялта lr=11470</label>
        <label id="11471" name="Алушта lr=11471" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11471">Алушта lr=11471</label>
        <label id="11472" name="Судак lr=11472" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11472">Судак lr=11472</label>
        <label id="20556" name="Саки lr=20556" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20556">Саки lr=20556</label>
        <label id="24696" name="Бахчисарайский район lr=24696" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="24696">Бахчисарайский район lr=24696</label>
        <label id="27217" name="Бахчисарай lr=27217" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="27217">Бахчисарай lr=27217</label>
        <label id="24702" name="Ленинский район lr=24702" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="24702">Ленинский район lr=24702</label>
        <label id="28786" name="Щёлкино lr=28786" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="28786">Щёлкино lr=28786</label>
        <label id="27555" name="Джанкой lr=27555" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="27555">Джанкой lr=27555</label>
        <label id="27693" name="Красноперекопск lr=27693" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="27693">Красноперекопск lr=27693</label>
        <label id="28892" name="Армянск lr=28892" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="28892">Армянск lr=28892</label>
        <label id="102444" name="Северный Кавказ lr=102444" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 4px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="102444">Северный Кавказ lr=102444</label>
        <label id="11010" name="Республика Дагестан lr=11010" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11010">Республика Дагестан lr=11010</label>
        <label id="28" name="Махачкала lr=28" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="28">Махачкала lr=28</label>
        <label id="11006" name="Буйнакск lr=11006" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11006">Буйнакск lr=11006</label>
        <label id="11007" name="Дербент lr=11007" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11007">Дербент lr=11007</label>
        <label id="11008" name="Каспийск lr=11008" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11008">Каспийск lr=11008</label>
        <label id="11009" name="Кизляр lr=11009" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11009">Кизляр lr=11009</label>
        <label id="11011" name="Хасавюрт lr=11011" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11011">Хасавюрт lr=11011</label>
        <label id="21521" name="Избербаш lr=21521" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="21521">Избербаш lr=21521</label>
        <label id="11012" name="Республика Ингушетия lr=11012" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11012">Республика Ингушетия lr=11012</label>
        <label id="1092" name="Назрань lr=1092" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="1092">Назрань lr=1092</label>
        <label id="20181" name="Магас lr=20181" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="20181">Магас lr=20181</label>
        <label id="11013" name="Кабардино-Балкарская Республика lr=11013" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11013">Кабардино-Балкарская Республика lr=11013</label>
        <label id="30" name="Нальчик lr=30" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="30">Нальчик lr=30</label>
        <label id="11020" name="Карачаево-Черкесская Республика lr=11020" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11020">Карачаево-Черкесская Республика lr=11020</label>
        <label id="1104" name="Черкесск lr=1104" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="1104">Черкесск lr=1104</label>
        <label id="11021" name="Республика Северная Осетия — Алания lr=11021" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11021">Республика Северная Осетия — Алания lr=11021</label>
        <label id="33" name="Владикавказ lr=33" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="33">Владикавказ lr=33</label>
        <label id="11024" name="Чеченская Республика lr=11024" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11024">Чеченская Республика lr=11024</label>
        <label id="1106" name="Грозный lr=1106" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="1106">Грозный lr=1106</label>
        <label id="11069" name="Ставропольский край lr=11069" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 9px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11069">Ставропольский край lr=11069</label>
        <label id="36" name="Ставрополь lr=36" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="36">Ставрополь lr=36</label>
        <label id="11056" name="Георгиевск lr=11056" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11056">Георгиевск lr=11056</label>
        <label id="11057" name="Ессентуки lr=11057" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11057">Ессентуки lr=11057</label>
        <label id="11062" name="Кисловодск lr=11062" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11062">Кисловодск lr=11062</label>
        <label id="11063" name="Минеральные Воды lr=11063" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11063">Минеральные Воды lr=11063</label>
        <label id="11064" name="Невинномысск lr=11064" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11064">Невинномысск lr=11064</label>
        <label id="11067" name="Пятигорск lr=11067" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11067">Пятигорск lr=11067</label>
        <label id="99456" name="Будённовский район lr=99456" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 16px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="99456">Будённовский район lr=99456</label>
        <label id="11055" name="Будённовск lr=11055" style="cursor: pointer;text-align:left; display: block; padding: 5px 0px 5px 25px; border-bottom: 1px solid rgb(210, 205, 217);"><input type="checkbox" value="11055">Будённовск lr=11055</label>
      </div>
      <div style="display:flex;justify-content:right;align-items:center;height:50px;flex-direction:column;">
        <div id="ex-clean" style="align-self:end;">Очистить выбранные</div>
        <a href="https://headofseo.ru/" style="color:black;font-weight:700;margin-top:13px;">Head of SEO tools</a>
      </div>
    </div>
    <div id="ex-seo_added-words">
      <div id="ex-seo_added-words-header"><div style="padding-left:60px;">Head of SEO tools 1.1</div><div id="ex-seo_show-settings" style="margin-right: 10px;cursor:pointer;">${settingsSvg}</div></div>
      <div id="ex-seo_added-words-actions">
        <div id="ex-copy" title="Копировать без частот">${copySvg}</div>
        <div id="ex-copy-search" title="Копировать с частотами">${copySearchSvg}</div>
        <div id="ex-remove" title="Очистить список">${removeSvg}</div>
      </div>
      <div id="ex-seo_added-words-count">
        <div id="ex-seo_added-words-count_words" style="border-right:1px solid #8e8e8e;width:50%;">0</div>
        <div id="ex-seo_added-words-count_count" style="width:50%;">0</div>
      </div>
      <div id="ex-seo_added-words-list"></div>
    <div id="ga"><a href="https://headofseo.ru/" >Head of SEO tools</a></div>
    </div>
    <div id="ex-seo_settings">
      <div id="ex-seo_settings-header">Настройки (применяются при следующем действии)</div>
      <div class="ex-seo_setting-wrap">
        <div id="ex-seo-colorless">
          <input type="checkbox" id="colorless" value="colorless" checked>
          <label for="colorless">Обесцвечивать выбранные слова</label><br/>
        </div>
        <div id="ex-seo-remove-plus">
          <input type="checkbox" id="removeplus" value="removeplus" checked>
          <label for="removeplus">Удалить "+" из фраз</label><br/>
        </div>
      </div>
      <div id="ex-seo_settings-footer">
        <div class="ex-seo_button">Закрыть</div>
      </div>
    </div>`);

  document.querySelector('#ex-copy-search').addEventListener('click', () => {
    var value = '';
    [...document.querySelector('#ex-seo_added-words-list').children].forEach(item => {
      value += `${item.children[0].innerText};${item.children[1].innerText.replace('(','').replace(')','').replaceAll(/\u00a0/g, '')}\n`;
    });
    copyText(value);
  })

  document.querySelector('#ex-copy').addEventListener('click', () => {
    var value = '';
    [...document.querySelector('#ex-seo_added-words-list').children].forEach(item => {
      value += `${item.children[0].innerText}\n`;
    });
    copyText(value);
  })

  document.querySelector('#ex-remove').addEventListener('click', () => {
    document.querySelectorAll('.ex-seo-remove').forEach(item => {
      if (item.parentElement.parentElement.classList.contains('seo-added')) item.click();
    })
  });

  document.querySelector('#ex-seo_show-settings').addEventListener('click', () => {
    document.querySelector('#ex-seo_settings').style.display = 'block';
  });

  document.querySelector('.ex-seo_button').addEventListener('click', () => {
    document.querySelector('#ex-seo_settings').style.display = 'none';
  });

  function copyText(text) {
    var buffer = document.createElement("textarea");
    document.body.appendChild(buffer);
    buffer.value = text;
    buffer.select();
    document.execCommand("copy");
    document.body.removeChild(buffer);
  }

  dragElement(document.getElementById('ex-seo'));

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "_header")) {
      document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  var regions = [...document.getElementsByClassName('ex-seo_region-list')][0],
    regionsString = '',
    removePlus = document.querySelector('#removeplus');
    colorless = document.querySelector('#colorless');

  [...document.getElementsByClassName('ex-seo_header-actions__collapse')][0].addEventListener('click', e => {
    [...document.getElementsByClassName('ex-seo_header-actions__collapsed')][0].style.display = 'block';
    [...document.getElementsByClassName('ex-seo_region-list')][0].style.display = 'none';
    e.target.style.display = 'none';
  });
  [...document.getElementsByClassName('ex-seo_header-actions__collapsed')][0].addEventListener('click', e => {
    [...document.getElementsByClassName('ex-seo_region-list')][0].style.display = 'block';
    [...document.getElementsByClassName('ex-seo_header-actions__collapse')][0].style.display = 'block';
    e.target.style.display = 'none';
  });
  [...document.getElementsByClassName('ex-seo_header-actions__close')][0].addEventListener('click', e => {
    [...document.getElementsByClassName('ex-seo')][0].style.display = 'none';
  });
  [...document.getElementsByClassName('ex-seo_input')][0].addEventListener('input', e => {
    if (e.target.value !== '') {
      [...regions.children].forEach(item => item.style.display = 'none');
      var search = [...regions.children].filter(region => region.innerText.toLowerCase().includes(e.target.value.toLowerCase()));
      search.forEach(item => item.style.display = 'block');
    } else {
      [...regions.children].forEach(item => item.style.display = 'block');
    }
  });

  [...regions.children].forEach(region => {
    region.querySelector('input[type="checkbox"]').addEventListener('change', e => {
      if (e.target.checked) regionsString += `,${e.target.value}`;
      else regionsString = regionsString.replace(`,${e.target.value}`, '');
      setRegions(regionsString);
    })
  });
  document.getElementById('ex-clean').addEventListener('click', e => {
    [...regions.children].forEach(region => {
      if (region.querySelector('input[type="checkbox"]').checked) region.querySelector('input[type="checkbox"]').click();
    })
  });

  function fillTables() {
    [...document.getElementsByClassName('b-word-statistics__info-wrapper')].forEach(table => {
      table.insertAdjacentHTML('beforeend',
        `<div class='ex-seo_add-all'>Добавить все</div>`)
    })
  };

  var observer = new MutationObserver(elem => {
    elem.forEach(e => {
      if (e.addedNodes.length > 0) {
        if (document.querySelectorAll('.b-word-statistics__table').length > 0) {
          if (document.querySelectorAll('.ex-seo_add-all').length > 0) return;
          observer.disconnect();
          document.querySelectorAll('.b-word-statistics__table').forEach(table => {
            table.insertAdjacentHTML('beforebegin', `<div class='ex-seo_add-all'>Добавить все</div>`);
            table.parentElement.querySelector('.ex-seo_add-all').addEventListener('click', () => {
              [...table.children[0].children].forEach((row, index) => {
                if (index === 0) return;
                if (!row.classList.contains('seo-added')) row.querySelector('.ex-seo-add').click();
              })
            })
            table.querySelectorAll('tr').forEach((row, index) => {
              if (index === 0) return;
              row.children[0].style = 'display:flex;width:100%;';
              row.children[0].insertAdjacentHTML('afterbegin',
                `<div class="ex-seo-add" style="margin-right:10px;font-weight:800;">&plus;</div>
                <div class="ex-seo-remove" style="margin-right:10px;display:none;font-weight:800;">&minus;</div>`);
              [...document.querySelectorAll('.ex-seo-add')].forEach(button => {
                if (button.getAttribute('listen') === 'true') return;    
                button.setAttribute('listen', 'true');
                button.addEventListener('click', () => {
                  if (colorless.checked) row.classList.add('seo-added');
                  button.style.display = 'none';
                  button.nextElementSibling.style.display = 'block';
                  var phrase = button.parentElement.children[2].innerText;
                  var count = button.parentElement.nextElementSibling.innerText;
                  document.querySelector('#ex-seo_added-words-list').insertAdjacentHTML('beforeend',
                    `<div style="display:flex;align-items:end;"><div style="width:80%;">${removePlus.checked ? phrase.replaceAll('+', '') : phrase}</div><div style="margin-left:5px;">(${count})</div></div>`)
                  calcAdded();
                })
              });
              [...document.querySelectorAll('.ex-seo-remove')].forEach(button => {
                if (button.getAttribute('listen') === 'true') return;
                button.setAttribute('listen', 'true');
                button.addEventListener('click', () => {
                  row.classList.remove('seo-added');
                  var phrase = button.parentElement.children[2].innerText;
                  var list = document.querySelector('#ex-seo_added-words-list');
                  [...list.children].forEach(item => {
                    if (item.children[0].innerText === phrase.replaceAll('+', '') || item.children[0].innerText === phrase) {
                      item.remove();
                      button.style.display = 'none';
                      button.previousElementSibling.style.display = 'block';
                    }
                  })
                  calcAdded();
                })
              });
            })
          })
          observer.observe(document.body, {childList:true, subtree:true});
        }
      }
    });
  });
  observer.observe(document.body, {childList:true, subtree:true});

  function calcAdded() {
    var countPhrases = document.querySelector('#ex-seo_added-words-list').children.length;
    var countSearch = 0;
    [...document.querySelector('#ex-seo_added-words-list').children].forEach(item => {
      countSearch += Number(item.children[1].innerText.replace('(', '').replace(')', '').replaceAll(/\u00a0/g, ''))
    })
    document.querySelector('#ex-seo_added-words-count_words').innerText = countPhrases;
    document.querySelector('#ex-seo_added-words-count_count').innerText = countSearch;
  }

  function waitForElm(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      })
      observer.observe(document.body, {
        childList: true,
        subtree: true
      })
    })
  }
})
