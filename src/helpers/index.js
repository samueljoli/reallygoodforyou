
export const addTicker = (document) => {
  const marquee = document.createElement('marquee');
  const tickerContainer = document.createElement('div');
  const content = document.createTextNode('Website Under Construction');

  tickerContainer.style.fontSize = '7em';
  tickerContainer.style.color = 'white';

  marquee.setAttribute('behavior', 'scroll');
  marquee.setAttribute('direction', 'left');
  marquee.setAttribute('scrollamount', 10);
  marquee.appendChild(content);

  tickerContainer.appendChild(marquee);

  tickerContainer.style.position = 'absolute';
  tickerContainer.style.bottom = '0';
  tickerContainer.style.width = '100%';
  tickerContainer.style.textAlign = 'center';
  tickerContainer.style.zIndex = 100;
  tickerContainer.style.display = 'block';

  document.body.appendChild(tickerContainer);
};

/*
	position: absolute;
	top: 10px;
	width: 100%;
	text-align: center;
	z-index: 100;
display:block;
/*

/*
<div id="ticker-container">
  <div id="left-block"></div>
  <div id="ticker">
    <marquee
        behavior="scroll"
        direction="left"
        scrollamount="30"
    >
      Pineapple Hot Sauce - Mama Sauce - Miso Plum Bbq
    </marquee>
  </div>
  <div id="right-block"></div>
</div>
#ticker {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
}

#ticker p {
  font-size: 2em;
  overflow: hidden;
  font-family: 'Roboto Mono', monospace;
  /* Starting position */
/*
  -moz-transform:translateX(100%);
  -webkit-transform:translateX(100%);  
  transform:translateX(100%);
/* Apply animation to this element */  
/*
  -moz-animation: scroll-left 10s linear infinite;
  -webkit-animation: scroll-left 10s linear infinite;
  animation: scroll-left 10s linear infinite;
}

#ticker marquee {
  font-size: 5em;
  font-family: 'Roboto Mono', monospace;
}

#left-block {
  width: 100%;
  overflow: hidden;
  z-index: 2;
}

#right-block {
  width: 100%;
  overflow: hidden;
  z-index: 2;
}
  */
