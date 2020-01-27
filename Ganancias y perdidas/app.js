var ingresos, costos, impuestos, ganancia, porcentaje=0;

ingresos = prompt('¿Cuantos son tus ingresos?');
document.write('tus ingresos es ', ingresos );

costos = prompt('¿Cuantos son los costos?');
document.write('tus costos  es ', costos );

impuestos = prompt('¿Cual es el % de impuestos?');
document.write('tus impuestos son ', impuestos );


porcentaje = (impuestos/100)*costos
document.write('tu porcentaje  es ', porcentaje );

ganancia = ingresos - (costos + porcentaje);
document.write('tu ganancia es ', ganancia);

console.log( 'tu ganancia es ', ganancia);
document.write('tu ganancia es ', ganancia);



