function nbYear(p0, percent, aug, p) {
    var years = 0;
    while(p0 < p){
        p0 = p0 + p0*percent/100 + aug;
        years++;
    }
    return years;
}
nbYear(1000, 2, 50, 1200);