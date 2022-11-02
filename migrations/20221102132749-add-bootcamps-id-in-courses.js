'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /*
      Crear la  columna 'user_id' FK con users
      addColumn: parametros:
          1. La tabla en la cuel poner la columna
          2. El nombre de la nueva columna
          3. Opciones de la nueva columna
    */
   await queryInterface.addColumn('courses',
                                  'bootcamp_id',
                                    {
                                        type: Sequelize.INTEGER,
                                        references: {
                                          model:'bootcamps',
                                          key: 'id'
                                        },
                                        onUpdate: 'CASCADE',
                                        onDelete: 'SET NULL'
                                    }
                                  )
  },

  async down (queryInterface, Sequelize) {
    /* 
      Metodo remove column
      Parametros:
                1. La tabla de donde vas a remover
                2. La columns a eliminar
    */ 
    await queryInterface.removeColumn('courses','bootcamp_id')

  }
};
