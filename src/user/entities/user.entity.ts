import { Media } from 'src/media/entities/media.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'firstName', length: 50 })
  firstName: string;

  @Column({ name: 'lastName', length: 100})
  lastName: string;

  @Column({ name: 'email', length: 70 })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'birthdate' })
  birthdate: Date;

  @Column()
  isAdmin: boolean;

  @Column({name: 'picture'})
  picture: string;

  @Column({name: 'user_name', length: 40})
  userName: string;

  @ManyToMany(() => Media)
  @JoinTable()
  media: Media[];

}
