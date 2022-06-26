import { Media } from "src/media/entities/media.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Season {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'episodes_num' })
  episodes_num: string;

  @Column({ name: 'lastName', length: 240})
  description: string;

  @Column({ name: 'number'})
  year: number;

  @ManyToOne(() =>  Media,  Media =>  Media.season)
  media: Media;

}

