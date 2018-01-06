module.exports = () => {
    class Student{
        constructor(n,num,klass,eng,grade){
            this.name = n;
            this.num = num;
            this.class = klass;
            this.eng = eng;
            this.it = grade;
        }
        print(){
            return this.name+'|'+this.eng+'|'+this.it;
        }
    }
    var stu = [];
    var readlineSync = require('readline-sync');
    var flag = true;
    while(flag)
    {
        main = readlineSync.question('1. 添加学生\n' +
            '2. 生成成绩单\n' +
            '3. 退出\n' +
            '请输入你的选择（1～3）：');
        if(main==='1')
        {
            console.log('请输入学生信息（格式：姓名, 学号, 班级, 英语成绩, 编程成绩...），按回车提交：');
            var ans1 = readlineSync.question('').split(',');
            stu.push(new Student(ans1[0],ans1[1],ans1[2],ans1[3],ans1[4]));
            console.log('学生'+stu[stu.length-1].name+'的成绩被添加');
        }
        if(main==='2')
        {
            var num = readlineSync.question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
            var k=-1;
            for(var i=0;i<stu.length;i++)
            {
                if(stu[i].num===num)
                {
                    k=i;
                }
            }
            while(k===-1)
            {
                num=readlineSync.question('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
                k=-1;
                for(i=0;i<stu.length;i++)
                {
                    if(stu[i].num===num)
                    {
                        k=i;
                    }
                }
            }

            console.log('成绩单\n' +
                '姓名|英语|编程\n' +
                '========================\n'+stu[k].print()+'\n========================');

        }
        if(main==='3')
        {flag = false;}
    }
    return 0;
}

