function run(){
    var htmlRepeat = document.getElementById('box_caro');
    htmlRepeat.innerHTML = htmlRepeat.innerHTML + "<table id=\"table1\">\n" +
        "            <tr>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "            </tr>\n" +
        "        </table>\n" +
        "        <table id=\"table2\">\n" +
        "            <tr>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "                <td></td>\n" +
        "            </tr>\n" +
        "        </table>"
}
for(var i = 0; i<4; i++){
    if(i<4){
        run();
    }
}