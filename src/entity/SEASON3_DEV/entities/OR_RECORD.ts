import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("OR_RECORD" ,{schema:"SEASON3_DEV" } )
@Index("IDX_RECORD_TM",["RECORD_TM",])
@Index("IDX_START_END_TM",["START_TM","END_TM",])
@Index("IDX_RECORD",["UUID","RECORD_TM",])
@Index("IDX_RANK_TYPE",["RANK_TYPE","RECORD_TM",])
@Index("IDX_SEQ_UUID",["SEQ","UUID",])
export class OR_RECORD_DEV {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"SEQ"
        })
    SEQ:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"UUID"
        })
    UUID:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        name:"RECORD_TM"
        })
    RECORD_TM:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        name:"ROUTE_TM"
        })
    ROUTE_TM:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:256,
        name:"TITLE"
        })
    TITLE:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:1024,
        name:"FROM_ADDR"
        })
    FROM_ADDR:string;
        

    @Column("point",{ 
        nullable:true,
        name:"FROM_LOC"
        })
    FROM_LOC:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:1024,
        name:"TO_ADDR"
        })
    TO_ADDR:string | null;
        

    @Column("point",{ 
        nullable:true,
        name:"TO_LOC"
        })
    TO_LOC:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"START_TM"
        })
    START_TM:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"END_TM"
        })
    END_TM:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"DURATION_RECORD"
        })
    DURATION_RECORD:number | null;
        

    @Column("int",{ 
        nullable:false,
        name:"DURATION_RIDE"
        })
    DURATION_RIDE:number;
        

    @Column("int",{ 
        nullable:false,
        name:"DISTANCE"
        })
    DISTANCE:number;
        

    @Column("float",{ 
        nullable:false,
        precision:8,
        scale:1,
        name:"SPEED_MAX"
        })
    SPEED_MAX:number;
        

    @Column("float",{ 
        nullable:false,
        precision:8,
        scale:1,
        name:"SPEED_AVG"
        })
    SPEED_AVG:number;
        

    @Column("int",{ 
        nullable:true,
        name:"RPM_MAX"
        })
    RPM_MAX:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"RPM_AVG"
        })
    RPM_AVG:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"BPM_MAX"
        })
    BPM_MAX:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"BPM_AVG"
        })
    BPM_AVG:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ALTITUDE_MAX"
        })
    ALTITUDE_MAX:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ALTITUDE_UP"
        })
    ALTITUDE_UP:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ALTITUDE_DOWN"
        })
    ALTITUDE_DOWN:number | null;
        

    @Column("double",{ 
        nullable:false,
        precision:10,
        scale:1,
        name:"CALORIES"
        })
    CALORIES:number;
        

    @Column("int",{ 
        nullable:true,
        name:"TEMPERATURE"
        })
    TEMPERATURE:number | null;
        

    @Column("char",{ 
        nullable:false,
        name:"AUTO_PAUSE_YN"
        })
    AUTO_PAUSE_YN:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:2,
        name:"RIDING_MODE"
        })
    RIDING_MODE:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"RANK_TYPE"
        })
    RANK_TYPE:number | null;
        

    @Column("int",{ 
        nullable:false,
        name:"RECORD_TYPE"
        })
    RECORD_TYPE:number;
        

    @Column("char",{ 
        nullable:false,
        name:"RECORD_PUBLIC_YN"
        })
    RECORD_PUBLIC_YN:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:256,
        name:"GPX_URL"
        })
    GPX_URL:string;
        

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
        

    @Column("datetime",{ 
        nullable:true,
        name:"MIG_DT"
        })
    MIG_DT:Date | null;
        

    @Column("char",{ 
        nullable:true,
        name:"GPX_STATUS_YN"
        })
    GPX_STATUS_YN:string | null;
        
}
