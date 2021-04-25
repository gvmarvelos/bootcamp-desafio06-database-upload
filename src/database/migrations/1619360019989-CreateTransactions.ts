import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateTransactions1619360019989
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable({
      name: 'transactions',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'title',
          type: 'varchar',
        },
        {
          name: 'type',
          type: 'varchar',
        },
        {
          name: 'value',
          type: 'decimal',
          precision: 10,
          scale: 2,
        },
        { name: 'created_at', type: ' timestamp', default: 'now()' },
        { name: 'update_at', type: 'timestamp', default: 'now()' },
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transaction');
  }
}
