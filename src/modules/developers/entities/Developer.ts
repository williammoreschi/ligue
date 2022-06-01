import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('developers')
class Developer {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  hobby: string;

  @Column()
  age: number;

  @Column()
  birthDate: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Developer };
