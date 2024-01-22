function TimelineComponent(state) {

  const dom = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerText = "Timeline Component";
  dom.appendChild(h1);

  const text = document.createElement('input');
  dom.appendChild(text);
  text.setAttribute('type', 'text');

  const button = document.createElement('button');
  dom.appendChild(button);
  button.innerText = "Timeline Button";
  button.addEventListener('click', (e) => {
    dom.dispatchEvent(new CustomEvent('submit-button-clicked', {
      bubbles: true,
      detail: {
        'text': text.value,
      },
    }));
  });

  function updateFunc(data) {
    const div = document.createElement('div');
    div.innerText = "Text from outer app: " + data;
    dom.appendChild(div);
  }

  return { dom, updateFunc };
}

export {
  TimelineComponent,
};
