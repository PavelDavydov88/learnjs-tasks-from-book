function camelize(str) {
  return str.split("-")
            .map( (item, index) => (index == 0 ? item : item[0].toUpperCase() + item.slice(1) ) )
            .join("");
}

alert ( camelize("background-color") === 'backgroundColor' );
alert ( camelize("list-style-image") == 'listStyleImage' );
alert ( camelize("-webkit-transition") == 'WebkitTransition' );