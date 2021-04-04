import {
  Column,
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateRelation1617562880729 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'wallet',
      new TableColumn({
        name: 'gain_id',
        type: 'uuid',
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'wallet',
      new TableColumn({
        name: 'spent_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'wallet',
      new TableForeignKey({
        name: 'gainWallet',
        columnNames: ['gain_id'],
        referencedTableName: 'gain',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
    await queryRunner.createForeignKey(
      'wallet',
      new TableForeignKey({
        name: 'spentWallet',
        columnNames: ['spent_id'],
        referencedTableName: 'spent',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('wallet', 'spentWallet');
    await queryRunner.dropForeignKey('wallet', 'gainWallet');
    await queryRunner.dropColumn('wallet', 'spent_id');
    await queryRunner.dropColumn('wallet', 'gain_id');
  }
}
