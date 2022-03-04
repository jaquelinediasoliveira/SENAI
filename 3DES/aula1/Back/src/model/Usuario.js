const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(datacon) {
    super.init(
      {
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: true,
          validate: {
            isEmail: {
              msg: "Must be a valid email address",
            },
          },
        },
        senha: {
          type: DataTypes.STRING(150),
          allowNull: false,
        },
        foto: {
          type: DataTypes.STRING(60000),
        },
      },
      {
        sequelize: datacon,
        tableName: "usuarios",
        modelName: "usuario",
      }
    );
  }

  static associate(models) {
    Usuario.hasMany(models.localizacao, { foreignKey: "id_user" });
  }
}

module.exports = Usuario;
