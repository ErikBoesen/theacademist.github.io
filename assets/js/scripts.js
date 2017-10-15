var a = document.getElementsByTagName('a');

for (i = 0; i < a.length; i++) {
    if (a[i].href.startsWith('mailto:')) a[i].href = a[i].href.replace(/AT/, '@').replace(/DOT/, '.');
}
