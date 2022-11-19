function historialMov(sequelize, Datatypes){

    let a = 'historial_movimiento';
  
    let b = {
      id_historial: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      id_usuario: {type: Datatypes.INTEGER},
      id_movimiento: {type: Datatypes.INTEGER},
      fecha: {type: Datatypes.DATE},
      monto_inicial: {type: Datatypes.FLOAT},
      rendimiento: { type: Datatypes.FLOAT},
      monto_final: {type: Datatypes.FLOAT},
      id_inversion: {type: Datatypes.INTEGER}
    }
  
    let c = {camelCase: false, timestamps: false, tableName: "historial_movimiento"}; //hay que ver si va false en timestamps, porque aca tenemos atributos que son fecha!
  
    const historial = sequelize.define(a,b,c)

    historial.associate = function (modelos){
      historial.belongsTo(modelos.usuario, {
        as:"usuarios",
        foreignKey: "id_usuario"
      });
      historial.belongsTo(modelos.movimiento, {
        as:"movimientos",
        foreignKey: "id_movimiento"
      });
      historial.belongsTo(modelos.inversion, {
        as:"inversiones",
        foreignKey: "id_inversion"
      })
    }
  
    return historial;
  }
  
  
  module.exports = historialMov;