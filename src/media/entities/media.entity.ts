import { Genre } from 'src/genres/entities/genre.entity';
import { Season } from 'src/season/entities/season.entity';
import { Studio } from 'src/studios/entities/studio.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from 'typeorm';


@Entity()
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({name: 'title', length: 120 })
  title: string;

  @Column({name: 'evaluation', length: 1})
  evaluation: number;

  @Column({name: 'description', length: 1000})
  description: string;

  @Column({name: 'realese_datw'})
  releaseDate: Date;

  @Column({name: 'duration'})
  duration: Timestamp;

  @Column({name: 'piscture', length: 300})
  picture: string;

  @Column({name: 'is_serie'})
  isSerie: boolean;

  @OneToMany(() => Season, (Season) => Season.media, { cascade: true })
  season: Season[];

  @OneToMany(() => Studio, (Studio) => Studio.media, { cascade: true })
  studio: Studio[];
  
  @ManyToMany(() => User)
  @JoinTable()
  user: User[];

  @ManyToMany(() => Genre)
  @JoinTable()
  genre: Genre[];
}
