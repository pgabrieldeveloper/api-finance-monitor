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
      'gain',
      new TableColumn({
        name: 'walletId',
        type: 'uuid',
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'spent',
      new TableColumn({
        name: 'walletId',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'gain',
      new TableForeignKey({
        name: 'walletGain',
        columnNames: ['walletId'],
        referencedTableName: 'wallet',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
    await queryRunner.createForeignKey(
      'spent',
      new TableForeignKey({
        name: 'walletSpent',
        columnNames: ['walletId'],
        referencedTableName: 'wallet',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('spent', 'walletSpent');
    await queryRunner.dropForeignKey('gain', 'walletGain');
    await queryRunner.dropColumn('spent', 'walletId');
    await queryRunner.dropColumn('gain', 'walletIid');
  }
}
