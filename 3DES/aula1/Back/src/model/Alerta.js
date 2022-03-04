const { Model, DataTypes} = require('sequelize');

class Alerta extends Model {
 static init( datacon) {
    super.init(
            {
                tipo: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                duracao: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                descricao: {
                    type: DataTypes.STRING(150),
                    allowNull: false
                }
            },
            {
                sequelize: datacon,
                tableName: 'alertas',
                modelName: 'alerta'
            }
        )
    }

    static associate(models){
        Alerta.hasMany(models.localizacao, { foreignKey: 'id_alerta'});
    }

}

module.exports = Alerta;