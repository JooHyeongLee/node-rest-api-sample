import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("OR_RECORD_EXTN" ,{schema:"SEASON3_DEV" } )
@Index("RECORD_SEQ",["RECORD_SEQ",],{unique:true})
@Index("IDX_56e2ca67cf13df403cc37a08f0",["RECORD_SEQ",],{unique:true})
export class OR_RECORD_EXTN_DEV {

    @PrimaryGeneratedColumn({
        type: "int", 
        name: "SEQ"
        })
    SEQ:number;
        

    @Column("int",{ 
        nullable:true,
        unique: true,
        name:"RECORD_SEQ"
        })
    RECORD_SEQ:number | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:256,
        name:"GPX_URL"
        })
    GPX_URL:string;
        

    @Column("geometry",{ 
        nullable:true,
        name:"GPX_BOUNDARY"
        })
    GPX_BOUNDARY:string | null;
        

    @Column("datetime",{ 
        nullable:false,
        name:"UPD_DT"
        })
    UPD_DT:Date;
        

    @Column("datetime",{ 
        nullable:false,
        name:"INS_DT"
        })
    INS_DT:Date;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"UUID"
        })
    UUID:string | null;
        
}
