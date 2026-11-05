import { Question } from '../types/quiz';

// 60+ Question Bank for Random Selection
export const allQuestionsPool: Question[] = [
  // ==================== REACT POOL (16 Questions) ====================
  {
    id: 101,
    category: 'React',
    title: "რა ხდება, როდესაც შვილ კომპონენტში ვცდილობთ props-ის მნიშვნელობის პირდაპირ შეცვლას (მაგ. props.title = 'New Title')?",
    code: null,
    options: {
      A: "props არის read-only (immutable), ამიტომ მისი პირდაპირი მუტაცია დაუშვებელია და გამოიწვევს შეცდომას ან არაპროგნოზირებად ქცევას.",
      B: "კომპონენტი ავტომატურად ხელახლა დაარენდერდება (Re-render) ახალი მნიშვნელობით.",
      C: "მნიშვნელობა შეიცვლება მშობელ კომპონენტშიც (Two-way data binding).",
      D: "ეს დასაშვებია მხოლოდ იმ შემთხვევაში, თუ კომპონენტში გამოყენებულია useRef."
    },
    correct: 'A',
    explanation: "React-ში მონაცემთა ნაკადი არის ცალმხრივი (One-way data flow). props არის მკაცრად read-only (immutable) ობიექტი. შვილ კომპონენტს არ აქვს უფლება შეცვალოს მიღებული props-ები. მნიშვნელობის შესაცვლელად მშობელმა შვილს უნდა გადასცეს state-ის განმაახლებელი ფუნქცია (callback)."
  },
  {
    id: 102,
    category: 'React',
    title: "რას დაბეჭდავს ბრაუზერის კონსოლში ღილაკზე პირველივე დაკლიკების შემდეგ მოცემული კოდი?",
    codeLang: 'jsx',
    code: `function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return <button onClick={handleClick}>Click</button>;
}`,
    options: {
      A: "1",
      B: "undefined",
      C: "0",
      D: "NaN"
    },
    correct: 'C',
    explanation: "React-ში state-ის განახლება (setCount) მყისიერად არ ცვლის მიმდინარე ცვლადს. მიმდინარე რენდერში 'count' რჩება 0-ის ტოლი (closure snapshot). ახალი მნიშვნელობა (1) ხელმისაწვდომი იქნება მხოლოდ კომპონენტის შემდგომ რენდერში."
  },
  {
    id: 103,
    category: 'React',
    title: "React-ის წესების (Rules of Hooks) თანახმად, ქვემოთ ჩამოთვლილთაგან რომელი პრაქტიკაა დაუშვებელი?",
    code: null,
    options: {
      A: "Hook-ების გამოძახება Custom Hook-ის შიგნით.",
      B: "ერთი და იმავე ტიპის Hook-ის (მაგ. useState) რამდენჯერმე გამოყენება ერთ კომპონენტში.",
      C: "Hook-ების გამოძახება მხოლოდ Functional Component-ის უმაღლეს დონეზე (Top-level).",
      D: "Hook-ის გამოძახება პირობითი კონსტრუქციის (if) ან ციკლის (for/while) შიგნით."
    },
    correct: 'D',
    explanation: "React ეყრდნობა Hook-ების გამოძახების მკაცრ, ფიქსირებულ თანმიმდევრობას ყოველ რენდერზე. Hook-ის მოთავსება 'if' ბლოკში ან ციკლში არღვევს ამ თანმიმდევრობას, რის გამოც React ვეღარ დააკავშირებს შიდა state-ს სწორ გამოძახებასთან."
  },
  {
    id: 104,
    category: 'React',
    title: "მოცემულია კოდის ფრაგმენტი: <button onClick={handleClick(id)}>Delete</button>. რა პრობლემას გამოიწვევს ეს ჩანაწერი კომპონენტის დარენდერებისას?",
    code: `<button onClick={handleClick(id)}>Delete</button>`,
    codeLang: 'jsx',
    options: {
      A: "handleClick ფუნქცია გამოიძახება კომპონენტის რენდერისთანავე და არა ღილაკზე დაჭერის დროს.",
      B: "არანაირ პრობლემას არ გამოიწვევს, ფუნქციას სწორად გადაეცემა id დაკლიკებისას.",
      C: "React ამოაგდებს სინტაქსურ შეცდომას (SyntaxError) და აპლიკაცია არ დაკომპილირდება.",
      D: "id პარამეტრი დაკარგავს მნიშვნელობას და გახდება null."
    },
    correct: 'A',
    explanation: "ფრჩხილების გამოყენებისას (handleClick(id)) ფუნქცია დაუყოვნებლივ ეშვება კომპონენტის რენდერის დროს, ხოლო onClick-ს ენიჭება მისი დაბრუნებული შედეგი. სწორი სინტაქსია ანონიმური ფუნქციის გადაცემა: onClick={() => handleClick(id)}."
  },
  {
    id: 105,
    category: 'React',
    title: "რა გამოჩნდება ეკრანზე, როდესაც items არის ცარიელი მასივი (const items = [];) შემდეგი ჩანაწერისას?",
    code: `<div>
  {items.length && <p>You have items!</p>}
</div>`,
    codeLang: 'jsx',
    options: {
      A: "არაფერი (ცარიელი div)",
      B: "გამოჩნდება ტექსტი: 'You have items!'",
      C: "აპლიკაცია დაქრაშავს შეცდომით: 'Cannot read properties of empty array'",
      D: "ეკრანზე გამოისახება რიცხვი 0"
    },
    correct: 'D',
    explanation: "JavaScript-ში ლოგიკური ოპერაცია 0 && ... აბრუნებს 0-ს. განსხვავებით false, null და undefined-სგან, React რიცხვ 0-ს რენდერავს DOM-ში პირდაპირ როგორც ტექსტს. ამიტომ სწორი პრაქტიკაა: {items.length > 0 && ...} ან {Boolean(items.length) && ...}."
  },
  {
    id: 106,
    category: 'React',
    title: "რატომ არ არის რეკომენდებული სიის ელემენტების დარენდერებისას key-დ მასივის ინდექსის (index) გამოყენება დინამიურ სიებში?",
    code: null,
    options: {
      A: "ინდექსის გამოყენება ზღუდავს ელემენტების მაქსიმალურ რაოდენობას 100-მდე.",
      B: "React ვერ შეძლებს DOM-ის შექმნას და დააბრუნებს კომპილაციის შეცდომას.",
      C: "ელემენტების წაშლის ან რიგითობის შეცვლისას ინდექსები იცვლება, რამაც შეიძლება გამოიწვიოს არასწორი ელემენტების განახლება და შიდა state-ის აღრევა.",
      D: "ინდექსის გამოყენება ავტომატურად აქცევს Functional კომპონენტს Class კომპონენტად."
    },
    correct: 'C',
    explanation: "React იყენებს 'key'-ს DOM-ის ელემენტების იდენტიფიცირებისა და ოპტიმალური შედარებისთვის (Reconciliation). ელემენტის წაშლის ან ჩამატებისას ინდექსები იცვლება, რაც იწვევს არასწორი კომპონენტების re-render-ს და ინპუტების შიდა state-ის არევას."
  },
  {
    id: 107,
    category: 'React',
    title: "რა აქცევს <input /> ელემენტს 'Controlled Component'-ად React-ში?",
    code: null,
    options: {
      A: "როდესაც მისი მნიშვნელობა (value) იმართება React-ის state-ით და ახლდება onChange ივენთით.",
      B: "როდესაც მას მინიჭებული აქვს ref ატრიბუტი useRef-ის საშუალებით DOM-თან პირდაპირი წვდომისთვის.",
      C: "როდესაც input მოთავსებულია <form> ტეგის შიგნით და იყენებს onSubmit ივენთს.",
      D: "როდესაც defaultValue ატრიბუტს გადავცემთ მუდმივ სტრინგს."
    },
    correct: 'A',
    explanation: "Controlled Component ნიშნავს, რომ ფორმის ველის მონაცემების ერთადერთი წყარო (Single Source of Truth) არის React-ის state: value={state} განსაზღვრავს რას აჩვენებს ინპუტი, ხოლო onChange უზრუნველყოფს state-ის მყისიერ განახლებას."
  },
  {
    id: 108,
    category: 'React',
    title: "რა მომენტში ეშვება useEffect-ის მიერ დაბრუნებული ე.წ. Cleanup ფუნქცია მოცემულ კოდში?",
    code: `useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, [count]);`,
    codeLang: 'jsx',
    options: {
      A: "მხოლოდ მაშინ, როდესაც აპლიკაცია პირველად ჩაიტვირთება (Mounting-ის დროს).",
      B: "მხოლოდ მაშინ, როდესაც კომპონენტში ერორი (Error) დაფიქსირდება.",
      C: "მხოლოდ ბრაუზერის ტაბის დახურვის დროს.",
      D: "კომპონენტის unmount-ის დროს, ან ყოველი შემდეგი ეფექტის გაშვებამდე (როცა count იცვლება)."
    },
    correct: 'D',
    explanation: "Cleanup ფუნქცია ეშვება ორ დროს: 1) როდესაც კომპონენტი იშლება DOM-იდან (Unmount), და 2) ყოველ ახალ რენდერამდე, როცა dependency (count) შეიცვალა, რათა გაასუფთაოს წინა ეფექტის რესურსები (clearInterval)."
  },
  {
    id: 109,
    category: 'React',
    title: "რა ძირითადი განსხვავებაა useRef-სა და useState-ს შორის?",
    code: null,
    options: {
      A: "useRef-ის მნიშვნელობის შეცვლა (ref.current = ...) არ იწვევს კომპონენტის ხელახალ რენდერს (Re-render), ხოლო useState-ის შეცვლა იწვევს.",
      B: "useRef გამოიყენება მხოლოდ სტრინგებისთვის, ხოლო useState ობიექტებისთვის.",
      C: "useRef მუშაობს მხოლოდ სერვერზე (SSR), ხოლო useState ბრაუზერში.",
      D: "useRef-ის მნიშვნელობა იშლება ყოველი რენდერისას, ხოლო useState ინახავს მას."
    },
    correct: 'A',
    explanation: "useRef აბრუნებს მუტირებად ობიექტს `{ current: ... }`, რომლის მნიშვნელობის შეცვლაც არ აინიცირებს Re-render-ს. ის გამოიყენება როგორც DOM ელემენტებზე წვდომისთვის, ასევე მნიშვნელობების შესანახად რენდერებს შორის რენდერის გამოწვევის გარეშე."
  },
  {
    id: 110,
    category: 'React',
    title: "რა მნიშვნელობას მიიღებს count ღილაკზე ერთხელ დაჭერის შემდეგ?",
    code: `function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return <button onClick={handleClick}>+{count}</button>;
}`,
    codeLang: 'jsx',
    options: {
      A: "1",
      B: "3",
      C: "0",
      D: "undefined"
    },
    correct: 'B',
    explanation: "როდესაც setCount-ს გადავცემთ functional update-ს (callback `prev => prev + 1`), React ამ ცვლილებებს ათავსებს რიგში (queue) და თითოეულს გადასცემს წინა განახლების უახლეს შედეგს: 0 -> 1 -> 2 -> 3. შესაბამისად შედეგი იქნება 3."
  },
  {
    id: 111,
    category: 'React',
    title: "რატომ გამოიყენება React.Fragment (<>...</>) კომპონენტებში?",
    code: null,
    options: {
      A: "დამატებითი ზედმეტი DOM კვანძის (მაგ. <div>) შექმნის გარეშე რამდენიმე ელემენტის დასაჯგუფებლად.",
      B: "კომპონენტის სიჩქარის გასაზრდელად CSS-ის გათიშვის ხარჯზე.",
      C: "props-ების ავტომატური ვალიდაციისთვის.",
      D: "მხოლოდ Class Component-ების Functional Component-ებად გადასაქცევად."
    },
    correct: 'A',
    explanation: "React კომპონენტს შეუძლია დააბრუნოს მხოლოდ ერთი ფესვი (root) ელემენტი. Fragment საშუალებას გვაძლევს დავაჯგუფოთ ელემენტები ისე, რომ DOM-ში არ ჩაემატოს ზედმეტი wrapper ტეგები (<div>), რაც ხშირად აფუჭებს Flex/Grid განლაგებას ან HTML სემანტიკას (მაგ. <tr>, <td>, <li>)."
  },
  {
    id: 112,
    category: 'React',
    title: "რა მოხდება, თუ useEffect-ს საერთოდ არ გადავცემთ Dependency Array-ს (მეორე პარამეტრს)?",
    code: `useEffect(() => {
  console.log("Effect executed");
});`,
    codeLang: 'jsx',
    options: {
      A: "ეფექტი გაეშვება კომპონენტის ყოველი რენდერის (Re-render) შემდეგ.",
      B: "ეფექტი გაეშვება მხოლოდ ერთხელ კომპონენტის პირველი ჩატვირთვისას (Mount).",
      C: "React ამოაგდებს სინტაქსურ ერორს, რადგან მასივის გადაცემა სავალდებულოა.",
      D: "ეფექტი არასდროს გაეშვება."
    },
    correct: 'A',
    explanation: "თუ dependency array საერთოდ გამოტოვებულია, ეფექტი გაეშვება პირველ რენდერზეც და კომპონენტის ნებისმიერ შემდგომ re-render-ზეც. თუ გადავცემთ ცარიელ მასივს `[]`, მაშინ გაეშვება მხოლოდ ერთხელ (Mount-ისას)."
  },
  {
    id: 113,
    category: 'React',
    title: "რას ნიშნავს ტერმინი 'Lifting State Up' React-ში?",
    code: null,
    options: {
      A: "state-ის ატანას საერთო მშობელ კომპონენტში, როდესაც ორ ან მეტ შვილ კომპონენტს ერთი და იგივე მონაცემის გაზიარება სჭირდება.",
      B: "state-ის გადატანას Redux-ში ან გლობალურ საცავში.",
      C: "Class კომპონენტიდან Hooks-ზე მიგრაციას.",
      D: "state-ის შენახვას ბრაუზერის LocalStorage-ში."
    },
    correct: 'A',
    explanation: "React-ში მონაცემები მოძრაობს ზემოდან ქვემოთ. როდესაც ორ მეზობელ (sibling) კომპონენტს სჭირდება ერთი და იგივე state, საუკეთესო პრაქტიკაა state-ის ატანა მათ უახლოეს საერთო მშობელში (Lifting State Up) და props-ებით ქვემოთ ჩამოწოდება."
  },
  {
    id: 114,
    category: 'React',
    title: "რა მთავარ პრობლემას აგვარებს React Context API?",
    code: null,
    options: {
      A: "Prop Drilling-ს — მონაცემების ხელით გადაცემას კომპონენტების მრავალ იერარქიულ შრეში.",
      B: "მძიმე CSS ანიმაციების GPU აქსელერაციას.",
      C: "Node.js სერვერის API მოთხოვნების ქეშირებას.",
      D: "LocalStorage-ის ავტომატურ სინქრონიზაციას."
    },
    correct: 'A',
    explanation: "Context API საშუალებას გვაძლევს მონაცემები (მაგ. Theme, User Auth, Language) გავხადოთ ხელმისაწვდომი ნებისმიერი შვილი კომპონენტისთვის კომპონენტების ხეში, ისე რომ არ დაგვჭირდეს props-ების ხელით გატარება ყოველ შუალედურ შრეში (Prop Drilling)."
  },
  {
    id: 115,
    category: 'React',
    title: "რა არის SyntheticEvent React-ში?",
    code: null,
    options: {
      A: "React-ის cross-browser wrapper ნატიურ ბრაუზერულ Event ობიექტზე, რომელიც უზრუნველყოფს იდენტურ ქცევას ყველა ბრაუზერში.",
      B: "ხელოვნური ინტელექტის მიერ გენერირებული DOM ივენთი.",
      C: "მხოლოდ მობილურ ეკრანებზე შეხების (Touch) დასაჭერი ივენთი.",
      D: "ივენთი, რომელიც მხოლოდ Node.js გარემოში მუშაობს."
    },
    correct: 'A',
    explanation: "SyntheticEvent არის React-ის უნიფიცირებული შეფუთვა (wrapper) სტანდარტული ბრაუზერული DOM event-ის ირგვლივ. ის უზრუნველყოფს, რომ ივენთის თვისებები და მეთოდები (მაგ. `e.preventDefault()`, `e.stopPropagation()`) იდენტურად მუშაობდეს ყველა ბრაუზერში."
  },
  {
    id: 116,
    category: 'React',
    title: "რა არის Automatic Batching React 18-ში?",
    code: null,
    options: {
      A: "React ერთად აჯგუფებს (batch) state-ის რამდენიმე განახლებას (მათ შორის setTimeout, Promises და fetch-ის შიგნით) და აკეთებს მხოლოდ ერთ re-render-ს წარმადობისთვის.",
      B: "CSS კლასების ავტომატური შეკუმშვა ბრაუზერში.",
      C: "კომპონენტების ავტომატური გადაქცევა Web Workers-ად.",
      D: "სურათების ავტომატური ზომის შეცვლა რენდერის დროს."
    },
    correct: 'A',
    explanation: "React 18-მდე batching მუშაობდა მხოლოდ React-ის ივენთ ჰენდლერებში. React 18-დან Automatic Batching ავტომატურად მუშაობს ასინქრონულ ოპერაციებშიც (Promise, setTimeout, native events), რაც მნიშვნელოვნად ამცირებს ზედმეტ re-render-ებს."
  },

  // ==================== TYPESCRIPT POOL (16 Questions) ====================
  {
    id: 201,
    category: 'TypeScript',
    title: "რა ტიპს მიანიჭებს TypeScript ცვლადს message ავტომატურად (Type Inference) შემდეგ კოდში?",
    code: `let message = "Hello, World!";`,
    codeLang: 'typescript',
    options: {
      A: "any",
      B: "string",
      C: '"Hello, World!" (literal type)',
      D: "unknown"
    },
    correct: 'B',
    explanation: "რადგან გამოყენებულია 'let', ცვლადის მნიშვნელობა შეიძლება მომავალში შეიცვალოს, ამიტომ TypeScript მას ანიჭებს ზოგად 'string' ტიპს. 'const'-ის გამოყენების შემთხვევაში კი ტიპი იქნებოდა ზუსტი ლიტერალი: 'Hello, World!'."
  },
  {
    id: 202,
    category: 'TypeScript',
    title: "რა არის ერთ-ერთი მთავარი განსხვავება interface-სა და type-ს (Type Alias) შორის TypeScript-ში?",
    code: null,
    options: {
      A: "interface-ს გააჩნია Declaration Merging-ის შესაძლებლობა (ერთი და იმავე სახელის მქონე ინტერფეისები ავტომატურად ერთიანდება), ხოლო type-ს არა.",
      B: "type გამოიყენება მხოლოდ ფუნქციების ტიპიზაციისთვის, ხოლო interface მხოლოდ ობიექტებისთვის.",
      C: "interface მხარს არ უჭერს გაფართოებას (extends), ხოლო type უჭერს.",
      D: "interface კომპილაციის შემდეგ რჩება JavaScript კოდში, ხოლო type იშლება."
    },
    correct: 'A',
    explanation: "interface-ების დეკლარირება შესაძლებელია რამდენჯერმე ერთი და იმავე სახელით და TypeScript მათ გააერთიანებს (Declaration Merging), რაც ძალიან მოსახერხებელია მესამე მხარის ტიპების გასაფართოებლად. 'type'-ის დუბლირება კი გამოიწვევს შეცდომას."
  },
  {
    id: 203,
    category: 'TypeScript',
    title: "როგორ უნდა მოვახდინოთ input-ის ტიპის შემოწმება (Type Narrowing) მოცემულ ფუნქციაში, რათა უსაფრთხოდ გამოვიძახოთ .toUpperCase()?",
    code: `function formatInput(input: string | number) {
  // შემოწმება აქ
  return input.toUpperCase();
}`,
    codeLang: 'typescript',
    options: {
      A: "if (input instanceof String)",
      B: "if (input.type === 'string')",
      C: "if (typeof input === 'string')",
      D: "if (input === String)"
    },
    correct: 'C',
    explanation: "პრიმიტიული ტიპებისთვის (string, number, boolean) გამოიყენება 'typeof' ოპერატორი. 'if (typeof input === \"string\")' ბლოკში TypeScript ავტომატურად ავიწროებს Union ტიპს კონკრეტულ 'string'-მდე."
  },
  {
    id: 204,
    category: 'TypeScript',
    title: "მოცემულია ინტერფეისი. რა იქნება user.email თვისების რეალური ტიპი TypeScript-ის მიხედვით?",
    code: `interface User {
  id: number;
  name: string;
  email?: string;
}`,
    codeLang: 'typescript',
    options: {
      A: "string | null",
      B: "string",
      C: "string | undefined",
      D: "any"
    },
    correct: 'C',
    explanation: "'?' ოპერატორი (Optional property) მიუთითებს, რომ ეს ველი შეიძლება გამოტოვებული იყოს. შესაბამისად, მისი ტიპი TypeScript-ში ხდება: string | undefined."
  },
  {
    id: 205,
    category: 'TypeScript',
    title: "რომელი ტიპი უნდა მივუთითოთ ფუნქციის დასაბრუნებელ ტიპად (return type), თუ ფუნქცია ყოველთვის ისვრის შეცდომას (Exception) და არასდროს უბრუნდება გამომძახებელ კოდს?",
    code: null,
    options: {
      A: "void",
      B: "null",
      C: "undefined",
      D: "never"
    },
    correct: 'D',
    explanation: "'void' აღნიშნავს ფუნქციას, რომელიც წარმატებით სრულდება, მაგრამ არაფერს აბრუნებს. ხოლო 'never' აღნიშნავს მდგომარეობას, რომელიც არასდროს დასრულდება (მაგ. ყოველთვის ისვრის throw new Error() ან აქვს უსასრულო ციკლი)."
  },
  {
    id: 206,
    category: 'TypeScript',
    title: "რა განსხვავებაა any და unknown ტიპებს შორის TypeScript-ში?",
    code: null,
    options: {
      A: "unknown ტიპის ცვლადზე პირდაპირ მეთოდების გამოძახება ან მისი სხვა ტიპისთვის მინიჭება აკრძალულია Type Narrowing-ის გარეშე, განსხვავებით any-სგან.",
      B: "any არის type-safe ტიპი, ხოლო unknown თიშავს ტიპების ყველა შემოწმებას.",
      C: "unknown შეიძლება მიენიჭოს მხოლოდ სტრინგებს და რიცხვებს, ხოლო any იღებს ნებისმიერ მონაცემს.",
      D: "მათ შორის პრაქტიკული განსხვავება არ არის, ორივე სრულიად იდენტურია."
    },
    correct: 'A',
    explanation: "'unknown' არის type-safe ალტერნატივა 'any'-სი. ორივე იღებს ნებისმიერ მნიშვნელობას, მაგრამ 'unknown'-ზე მეთოდების გამოძახება ან სხვა ცვლადზე მინიჭება აკრძალულია, სანამ ტიპს 'typeof'-ით ან assertion-ით არ დაადგენთ."
  },
  {
    id: 207,
    category: 'TypeScript',
    title: "როგორ ჩავწეროთ ტიპი მასივისთვის, რომელიც უნდა შეიცავდეს მხოლოდ რიცხვებს და მისი შეცვლა (მუტაცია, მაგ. .push()) უნდა იყოს აკრძალული?",
    code: null,
    options: {
      A: "const numbers: number[]",
      B: "const numbers: static number[]",
      C: "const numbers: [number]",
      D: "const numbers: readonly number[]"
    },
    correct: 'D',
    explanation: "'readonly number[]' (ან ReadonlyArray<number>) კრძალავს მასივის მუტაციურ მეთოდებს (push, pop, splice, ინდექსით შეცვლა) და უზრუნველყოფს სრულ იმუტაბელურობას კომპილაციის ეტაპზე."
  },
  {
    id: 208,
    category: 'TypeScript',
    title: "რას ემსახურება T პარამეტრი მოცემულ ფუნქციაში?",
    code: `function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}`,
    codeLang: 'typescript',
    options: {
      A: "T არის კონკრეტული ტიპი, რომელიც აღნიშნავს მხოლოდ ტექსტურ მონაცემებს (Text).",
      B: "T არის Generic ტიპის პარამეტრი, რომელიც ფუნქციის გამოძახებისას დინამიურად იღებს მასივის ელემენტის ტიპს და უზრუნველყოფს Type Safety-ს.",
      C: "T ავალდებულებს ფუნქციას, რომ ყოველთვის დააბრუნოს Boolean ტიპის მნიშვნელობა.",
      D: "T მიუთითებს, რომ ფუნქცია მუშაობს ასინქრონულად და აბრუნებს Promise-ს."
    },
    correct: 'B',
    explanation: "Generics (<T>) საშუალებას გვაძლევს შევქმნათ მრავალჯერადი გამოყენების კომპონენტები. 'T' იღებს გადმოცემული მასივის ელემენტების ტიპს (მაგ. string, number, ან ობიექტს) და ინარჩუნებს ზუსტ Type Safety-ს დაბრუნებულ შედეგზე."
  },
  {
    id: 209,
    category: 'TypeScript',
    title: "რას აკეთებს TypeScript-ის ჩაშენებული Utility ტიპი Partial<T>?",
    code: null,
    options: {
      A: "T ტიპის ყველა თვისებას ხდის არასავალდებულოს (optional, ?).",
      B: "T ტიპის ყველა თვისებას ხდის მხოლოდ წაკითხვადს (readonly).",
      C: "T ტიპიდან შლის null და undefined მნიშვნელობებს.",
      D: "T ტიპიდან ამოარჩევს მხოლოდ პირველ ველს."
    },
    correct: 'A',
    explanation: "`Partial<T>` იღებს ობიექტის ტიპს და აბრუნებს ახალ ტიპს, სადაც T-ს ყველა თვისება ხდება optional (`?`). მაგალითად, მოსახერხებელია ობიექტის ნაწილობრივი განახლების (update) ფუნქციებისთვის."
  },
  {
    id: 210,
    category: 'TypeScript',
    title: "რას დააბრუნებს keyof User მოცემულ ინტერფეისზე?",
    code: `interface User {
  id: number;
  name: string;
  role: string;
}`,
    codeLang: 'typescript',
    options: {
      A: "'id' | 'name' | 'role' (თვისებების სახელების Union ლიტერალი)",
      B: "string | number",
      C: "['id', 'name', 'role'] (JavaScript მასივი)",
      D: "User ობიექტის ასლი"
    },
    correct: 'A',
    explanation: "`keyof` ოპერატორი იღებს ობიექტის ტიპს და აბრუნებს მისი თვისებების (keys) სტრინგული ან რიცხვითი სახელების Union ლიტერალს: `'id' | 'name' | 'role'`."
  },
  {
    id: 211,
    category: 'TypeScript',
    title: "როგორ შევქმნათ ტიპი ობიექტისთვის, სადაც key არის სტრინგი და value არის რიცხვი (Record ტიპის გამოყენებით)?",
    code: null,
    options: {
      A: "Record<string, number>",
      B: "Record[string]: number",
      C: "Map<string, number>",
      D: "Record(string -> number)"
    },
    correct: 'A',
    explanation: "TypeScript-ში `Record<Keys, Type>` არის სტანდარტული utility ტიპი dictionary-ის ფორმის ობიექტებისთვის, სადაც პირველი არგუმენტია key-ს ტიპი, ხოლო მეორე — მნიშვნელობის ტიპი: `Record<string, number>`."
  },
  {
    id: 212,
    category: 'TypeScript',
    title: "რა არის Tuple (კორტეჟი) TypeScript-ში?",
    code: `let coordinates: [number, number] = [41.7151, 44.8271];`,
    codeLang: 'typescript',
    options: {
      A: "ფიქსირებული სიგრძისა და კონკრეტულ ინდექსებზე მკაცრად განსაზღვრული ტიპების მქონე მასივი.",
      B: "მასივი, რომელიც მხოლოდ უარყოფით რიცხვებს შეიცავს.",
      C: "ობიექტი, რომელსაც არ გააჩნია მეთოდები.",
      D: "მხოლოდ CSS კოორდინატების შესანახი ცვლადი."
    },
    correct: 'A',
    explanation: "Tuple არის მასივის სპეციალური ტიპი, სადაც წინასწარ არის ცნობილი ელემენტების ზუსტი რაოდენობა და თითოეულ პოზიციაზე (ინდექსზე) არსებული ელემენტის ტიპი (მაგ. `[string, number]`)."
  },
  {
    id: 213,
    category: 'TypeScript',
    title: "რას აკეთებს Type Assertion (მაგ. 'as string') TypeScript-ში?",
    code: `const val = someUnknownValue as string;`,
    codeLang: 'typescript',
    options: {
      A: "დეველოპერი ეუბნება კომპილატორს, რომ ენდოს მის ცოდნას ტიპის შესახებ; ის არ აკეთებს runtime ტიპის კონვერტაციას.",
      B: "მონაცემს runtime-ში ავტომატურად გადაიყვანს string ტიპში (Type Casting).",
      C: "შლის ცვლადს მეხსიერებიდან, თუ ის string არ აღმოჩნდა.",
      D: "ქმნის ახალ კლასს string-ის მემკვიდრეობით."
    },
    correct: 'A',
    explanation: "Type Assertion (`as Type`) ეხმარება კომპილატორს ტიპის განსაზღვრაში კომპილაციის დროს, მაგრამ JavaScript-ში დაკომპილირებისას `as` საერთოდ ქრება და არ ახდენს მონაცემის runtime გარდაქმნას."
  },
  {
    id: 214,
    category: 'TypeScript',
    title: "რა არის Discriminated Union (Tagged Union) TypeScript-ში?",
    code: `type Action = 
  | { type: 'INCREMENT'; amount: number }
  | { type: 'RESET' };`,
    codeLang: 'typescript',
    options: {
      A: "Union ტიპი, რომლის თითოეულ წევრს აქვს ერთი საერთო ლიტერალური თვისება (მაგ. 'type'), რაც აადვილებს ტიპის გარჩევას (Narrowing).",
      B: "ტიპი, რომელიც კრძალავს Redux-ის გამოყენებას.",
      C: "ინტერფეისი, რომელსაც არ აქვს თვისებები.",
      D: "მხოლოდ შეცდომების დასაჭერად შექმნილი ფუნქცია."
    },
    correct: 'A',
    explanation: "Discriminated Union შედგება ობიექტების რამდენიმე ტიპისგან, რომლებსაც აქვთ საერთო ველი (დისკრიმინანტი, მაგ. `type` ან `kind`). `switch (action.type)`-ის საშუალებით TypeScript ავტომატურად არკვევს ობიექტის ზუსტ სტრუქტურას."
  },
  {
    id: 215,
    category: 'TypeScript',
    title: "რას აკეთებს Pick<T, K> utility ტიპი?",
    code: null,
    options: {
      A: "T ტიპიდან ამოარჩევს მხოლოდ K-ში ჩამოთვლილ კონკრეტულ თვისებებს.",
      B: "T ტიპიდან შლის K-ში ჩამოთვლილ თვისებებს.",
      C: "T ტიპის ყველა თვისებას გარდაქმნის Boolean-ად.",
      D: "შემთხვევით ამოარჩევს ერთ თვისებას."
    },
    correct: 'A',
    explanation: "`Pick<T, Keys>` ქმნის ახალ ტიპს T ტიპიდან მხოლოდ მითითებული თვისებების (keys) ამოღებით. საპირისპირო ოპერაციას აკეთებს `Omit<T, Keys>`, რომელიც მითითებულ თვისებებს აშორებს."
  },
  {
    id: 216,
    category: 'TypeScript',
    title: "რა განსხვავებაა Type Aliases-სა და Interfaces-ს შორის Union ტიპების შექმნისას?",
    code: null,
    options: {
      A: "Type Alias-ს შეუძლია პირდაპირ გამოაცხადოს Union (მაგ. type Status = 'open' | 'closed'), ხოლო Interface-ს უშუალოდ Union-ის შექმნა არ შეუძლია.",
      B: "Interface-ს შეუძლია Union-ის შექმნა, Type Alias-ს კი არა.",
      C: "არანაირი განსხვავება არ არის, ორივე იდენტური სინტაქსით ქმნის Union-ს.",
      D: "Union ტიპები TypeScript-ში საერთოდ აკრძალულია."
    },
    correct: 'A',
    explanation: "`type Status = 'loading' | 'success' | 'error';` შესაძლებელია მხოლოდ Type Alias-ით. `interface`-ით პრიმიტივების პირდაპირი Union-ის შექმნა შეუძლებელია, რადგან interface ყოველთვის ობიექტის ფორმას აღწერს."
  },

  // ==================== TAILWIND CSS POOL (15 Questions) ====================
  {
    id: 301,
    category: 'Tailwind CSS',
    title: "რას ნიშნავს Tailwind CSS-ის 'Utility-First' მიდგომა?",
    code: null,
    options: {
      A: "წინასწარ გამზადებული სრული UI კომპონენტების (მაგ. Button, Modal) გამოყენებას HTML ტეგებად.",
      B: "სტილების დაწერას მხოლოდ ცალკე .css ფაილებში სპეციალური JavaScript ფუნქციებით.",
      C: "დაბალი დონის, ერთ კონკრეტულ CSS თვისებაზე პასუხისმგებელი კლასების (single-purpose classes) პირდაპირ HTML/JSX მარკაპში გამოყენებას.",
      D: "CSS-ის ნაცვლად სტილების Inline JavaScript ობიექტების სახით გაწერას."
    },
    correct: 'C',
    explanation: "Utility-First მიდგომა ნიშნავს, რომ აბსტრაქტული კლასების ნაცვლად (.card, .btn), პირდაპირ მარკაპში ვიყენებთ პატარა, ატომურ კლასებს (p-4, flex, text-center), რაც თავიდან გვარიდებს CSS-ის გაბერვასა და სახელდების ქაოსს."
  },
  {
    id: 302,
    category: 'Tailwind CSS',
    title: "Tailwind CSS-ში რომელი კლასების კომბინაციაა საჭირო Flexbox კონტეინერში ელემენტების როგორც ჰორიზონტალურად, ისე ვერტიკალურად ცენტრში მოსათავსებლად?",
    code: null,
    options: {
      A: "flex items-center justify-center",
      B: "flex align-center justify-between",
      C: "flex content-center text-center",
      D: "flex justify-middle items-middle"
    },
    correct: 'A',
    explanation: "'flex' რთავს flexbox კონტეინერს, 'items-center' უზრუნველყოფს ვერტიკალურ ცენტრირებას (align-items: center), ხოლო 'justify-center' ჰორიზონტალურ ცენტრირებას (justify-content: center)."
  },
  {
    id: 303,
    category: 'Tailwind CSS',
    title: "როგორ მუშაობს Tailwind CSS-ის responsive პრეფიქსები (მაგალითად, md:flex)?",
    code: null,
    options: {
      A: "Desktop-first პრინციპით — სტილი მოქმედებს ეკრანებზე md ზომამდე (max-width).",
      B: "Mobile-first პრინციპით — სტილი იწყებს მოქმედებას md ზომიდან და ვრცელდება უფრო დიდ ეკრანებზე (min-width: 768px).",
      C: "სტილი მუშაობს მკაცრად მხოლოდ md ზომის ეკრანზე და არ ვრცელდება lg ან xl ეკრანებზე.",
      D: "მუშაობს მხოლოდ იმ შემთხვევაში, თუ მომხმარებელი მობილური მოწყობილობიდან შედის."
    },
    correct: 'B',
    explanation: "Tailwind იყენებს Mobile-First მიდგომას: პრეფიქსის გარეშე გაწერილი კლასები ვრცელდება მობილურიდანვე, ხოლო 'md:' ნიშნავს @media (min-width: 768px) — ანუ ძალაში შედის 768px-დან და ვრცელდება ზემოთ."
  },
  {
    id: 304,
    category: 'Tailwind CSS',
    title: "რამდენ პიქსელს (px) უდრის p-4 კლასი Tailwind CSS-ის default კონფიგურაციით (სადაც 1 spacing unit = 0.25rem = 4px)?",
    code: null,
    options: {
      A: "4px",
      B: "8px",
      C: "24px",
      D: "16px"
    },
    correct: 'D',
    explanation: "Tailwind-ის default spacing მასშტაბში 1 unit = 0.25rem = 4px. შესაბამისად, 4 * 4px = 16px (1rem), რაც ნიშნავს: padding: 1rem (16px)."
  },
  {
    id: 305,
    category: 'Tailwind CSS',
    title: "რომელი კლასების კომბინაცია გამოიყენება Tailwind-ში ტექსტის ზომის გასაზრდელად (1.125rem) და მისი სისქის (font weight) გასასქელებლად (700)?",
    code: null,
    options: {
      A: "font-lg font-heavy",
      B: "text-lg font-bold",
      C: "text-size-large font-weight-700",
      D: "text-big bold"
    },
    correct: 'B',
    explanation: "Tailwind-ში შრიფტის ზომა იმართება 'text-{size}' კლასებით ('text-lg' = 1.125rem / 18px), ხოლო სისქე 'font-{weight}' კლასებით ('font-bold' = font-weight: 700)."
  },
  {
    id: 306,
    category: 'Tailwind CSS',
    title: "როგორ მივუთითოთ Tailwind-ში, რომ ღილაკის ფონის ფერი შეიცვალოს (bg-blue-600) მხოლოდ მაუსის მიტანისას (Hover state)?",
    code: null,
    options: {
      A: "hover:bg-blue-600",
      B: "onhover:bg-blue-600",
      C: "hover-bg-blue-600",
      D: "mouse:bg-blue-600"
    },
    correct: 'A',
    explanation: "Tailwind-ში ფსევდო-კლასების მოდიფიკატორები იწერება ორწერტილით: 'hover:bg-blue-600', 'focus:ring-2', 'active:scale-95' და ა.შ."
  },
  {
    id: 307,
    category: 'Tailwind CSS',
    title: "რატომ არის პრობლემური Tailwind კლასების ასეთი დინამიური კონსტრუირება React-ში?",
    code: `// color შეიძლება იყოს "red", "blue" ან "green"
<div className={\`text-\${color}-500\`}>Status</div>`,
    codeLang: 'jsx',
    options: {
      A: "React კრძალავს template literal-ების გამოყენებას className-ის შიგნით.",
      B: "Tailwind-ის კომპილატორი (JIT engine) სტატიკურად ასკანირებს კოდს სრული კლასის სახელებისთვის; დანაწევრებული კლასი ვერ ამოიცნობა და შესაბამისი CSS არ დაგენერირდება.",
      C: "ბრაუზერი ვერ კითხულობს დეფისს (-) კლასის სახელში, თუ ის ცვლადით არის ჩასმული.",
      D: "ეს გამოიწვევს Virtual DOM-ში მეხსიერების გაჟონვას (Memory Leak)."
    },
    correct: 'B',
    explanation: "Tailwind არ უშვებს თქვენს კოდს runtime-ში; ის static regex-ით ეძებს კლასების სრულ სახელებს. რადგან 'text-${color}-500' არ არის სრული სტრინგი, Tailwind ვერ მიხვდება რომელი კლასი უნდა დააგენერიროს. სწორი გზაა სრული კლასების ობიექტ-მაპინგი."
  },
  {
    id: 308,
    category: 'Tailwind CSS',
    title: "როგორ იწერება თვითნებური (Arbitrary) მნიშვნელობა Tailwind CSS-ში (მაგ. სიგანე 342px)?",
    code: null,
    options: {
      A: "w-[342px]",
      B: "w-custom-342",
      C: "width: 342px",
      D: "w(342px)"
    },
    correct: 'A',
    explanation: "Tailwind-ის JIT კომპილატორი მხარს უჭერს კვადრატულ ფრჩხილებს Arbitrary Values-სთვის: `w-[342px]`, `bg-[#1da1f2]`, `top-[17px]`, რაც საშუალებას გვაძლევს კონფიგურაციის შეუცვლელად გამოვიყენოთ ზუსტი მნიშვნელობები."
  },
  {
    id: 309,
    category: 'Tailwind CSS',
    title: "რომელი კლასები გამოიყენება CSS Grid-ში 3-სვეტიანი ბადის შესაქმნელად 16px (1rem) დაშორებით?",
    code: null,
    options: {
      A: "grid grid-cols-3 gap-4",
      B: "grid cols-3 space-4",
      C: "display-grid grid-3 margin-4",
      D: "flex flex-col-3 gap-16"
    },
    correct: 'A',
    explanation: "`grid` ააქტიურებს grid კონტეინერს, `grid-cols-3` ქმნის სამ ტოლ სვეტს (`grid-template-columns: repeat(3, minmax(0, 1fr))`), ხოლო `gap-4` ქმნის 16px დაშორებას სვეტებსა და რიგებს შორის."
  },
  {
    id: 310,
    category: 'Tailwind CSS',
    title: "რას აკეთებს Tailwind-ის 'group' და 'group-hover' მოდიფიკატორი?",
    code: `<div className="group">
  <span className="group-hover:text-sky-500">Title</span>
</div>`,
    codeLang: 'html',
    options: {
      A: "მშობელ ელემენტზე მაუსის მიტანისას (hover) სტილავს შვილ ელემენტს.",
      B: "აჯგუფებს CSS ფაილებს ერთ არქივში.",
      C: "კრძალავს hover ივენთებს მობილურ მოწყობილობებზე.",
      D: "ავტომატურად ქმნის Flexbox ჯგუფს."
    },
    correct: 'A',
    explanation: "როდესაც მშობელ კონტეინერს ვანიჭებთ `group` კლასს, ნებისმიერ შვილ ელემენტში შეგვიძლია გამოვიყენოთ `group-hover:`, რათა შვილის სტილი შეიცვალოს მშობელზე ჰოვერის დროს."
  },
  {
    id: 311,
    category: 'Tailwind CSS',
    title: "როგორ ჩავრთოთ Dark Mode-ის სტილი Tailwind-ში (მაგ. მუქი ფონი)?",
    code: null,
    options: {
      A: "dark:bg-slate-900",
      B: "night-mode:bg-slate-900",
      C: "theme-dark(bg-slate-900)",
      D: "mode-dark:bg-slate-900"
    },
    correct: 'A',
    explanation: "Tailwind იყენებს `dark:` პრეფიქსს Dark Mode-ისთვის (მაგ. `bg-white dark:bg-slate-900`). ის შეიძლება იმართებოდეს სისტემური `prefers-color-scheme`-ით ან `class` სტრატეგიით HTML ტეგზე `class='dark'`-ის დამატებით."
  },
  {
    id: 312,
    category: 'Tailwind CSS',
    title: "რას აკეთებს კლასი 'truncate' Tailwind CSS-ში?",
    code: null,
    options: {
      A: "გრძელ ტექსტს ჭრის ერთ ხაზზე და ბოლოში უმატებს მრავალწერტილს (overflow: hidden; text-overflow: ellipsis; white-space: nowrap).",
      B: "შლის ტექსტს DOM-იდან.",
      C: "ტექსტს აქცევს Uppercase-ად.",
      D: "ტექსტის ზომას ამცირებს 10px-მდე."
    },
    correct: 'A',
    explanation: "`truncate` არის მოსახერხებელი shortcut სამი CSS თვისებისთვის: `overflow: hidden`, `text-overflow: ellipsis` და `white-space: nowrap`, რაც უზრუნველყოფს ტექსტის ლამაზ შემოკლებას მრავალწერტილით."
  },
  {
    id: 313,
    category: 'Tailwind CSS',
    title: "რას ემსახურება @apply დირექტივა Tailwind CSS-ში?",
    code: `.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded-lg;
}`,
    codeLang: 'css',
    options: {
      A: "Tailwind-ის არსებული utility კლასების გამოყენებას ჩვეულებრივ CSS წესებში განმეორებადი კომპონენტების სტილების შესაქმნელად.",
      B: "Google Fonts-ის დაიმპორტებას CSS ფაილში.",
      C: "JavaScript ფუნქციის გამოძახებას სტილების ფაილიდან.",
      D: "Tailwind-ის გათიშვას კონკრეტულ კლასზე."
    },
    correct: 'A',
    explanation: "`@apply` საშუალებას გაძლევთ გააერთიანოთ Tailwind-ის რამდენიმე utility კლასი ერთ ტრადიციულ CSS კლასში თქვენს `.css` ფაილში, თუმცა React/Vue პროექტებში კომპონენტური ექსტრაქცია (React Component) ხშირად უფრო რეკომენდებულია."
  },
  {
    id: 314,
    category: 'Tailwind CSS',
    title: "რომელი კლასი გამოიყენება ელემენტის ეკრანიდან სრულად დასამალად (display: none)?",
    code: null,
    options: {
      A: "hidden",
      B: "invisible",
      C: "display-none",
      D: "opacity-0"
    },
    correct: 'A',
    explanation: "`hidden` შეესაბამება `display: none`-ს (ელემენტი ქრება განლაგებიდან). `invisible` შეესაბამება `visibility: hidden`-ს (ადგილს ინარჩუნებს, მაგრამ უხილავია), ხოლო `opacity-0` გამჭვირვალეს ხდის."
  },
  {
    id: 315,
    category: 'Tailwind CSS',
    title: "რას ნიშნავს Tailwind-ში 'transition-all duration-300 ease-in-out'?",
    code: null,
    options: {
      A: "ნებისმიერი CSS თვისების ცვლილების გლუვ, 300ms-იან ანიმაციას აჩქარება-შენელებით.",
      B: "გვერდის გადატვირთვის დაყოვნებას 300 წამით.",
      C: "ვიდეო ფაილის ტრანსკოდირებას.",
      D: "სერვერთან API კავშირის ტაიმაუტს."
    },
    correct: 'A',
    explanation: "ეს კლასები მართავს CSS Transition-ს: `transition-all` უზრუნველყოფს ყველა ცვალებადი თვისების ანიმირებას, `duration-300` განსაზღვრავს 300ms ხანგრძლივობას, ხოლო `ease-in-out` — გლუვ აჩქარებასა და შენელებას."
  },

  // ==================== BASIC OPTIMIZATION POOL (15 Questions) ====================
  {
    id: 401,
    category: 'Basic Optimization',
    title: "რომელი კომბინაცია გამოიყენება React-ში კომპონენტის დინამიურად, მოთხოვნისამებრ ჩასატვირთად (Lazy Loading & Code Splitting)?",
    code: null,
    options: {
      A: "React.memo და useCallback",
      B: "React.lazy და <Suspense>",
      C: "useTransition და useDeferredValue",
      D: "async/await პირდაპირ JSX ტეგში"
    },
    correct: 'B',
    explanation: "React.lazy(() => import('./Component')) საშუალებას გაძლევთ დინამიურად შემოიტანოთ კომპონენტი, ხოლო <Suspense fallback={<Spinner />}> განსაზღვრავს fallback UI-ს მანამ, სანამ bundle-ის ფრაგმენტი ქსელიდან ჩამოიტვირთება."
  },
  {
    id: 402,
    category: 'Basic Optimization',
    title: "რა ძირითადი განსხვავებაა useMemo-სა და useCallback-ს შორის?",
    code: null,
    options: {
      A: "useMemo ამახსოვრებს (memoize) გამოთვლის შედეგ მნიშვნელობას, ხოლო useCallback ამახსოვრებს თავად ფუნქციის ინსტანციას (რეფერენსს) რენდერებს შორის.",
      B: "useMemo მუშაობს ასინქრონულად, ხოლო useCallback სინქრონულად.",
      C: "useCallback გამოიყენება მხოლოდ Class Component-ებში, ხოლო useMemo Functional Component-ებში.",
      D: "მათ შორის ფუნქციური განსხვავება არ არის, ისინი სრული სინონიმებია."
    },
    correct: 'A',
    explanation: "useMemo(() => computeHeavyValue(a, b), [a, b]) ინახავს გამოთვლის შედეგ მნიშვნელობას. ხოლო useCallback(fn, deps) ინახავს თავად ფუნქციის რეფერენსს, რათა ყოველ რენდერზე ახალი ფუნქცია არ შეიქმნას მეხსიერებაში."
  },
  {
    id: 403,
    category: 'Basic Optimization',
    title: "როდის არის ეფექტური React.memo-ს გამოყენება კომპონენტის შესაფუთად?",
    code: null,
    options: {
      A: "როდესაც გვინდა, რომ კომპონენტი ყოველ წამს ავტომატურად დარენდერდეს.",
      B: "როდესაც კომპონენტში ხდება მძიმე DOM ივენთების დაჭერა (Event Throttling).",
      C: "როდესაც გვინდა Global State-ის შეცვლა ყოველგვარი re-render-ის გარეშე.",
      D: "როდესაც შვილი კომპონენტი ხშირად რენდერდება მშობლის გამო, მაგრამ მისი საკუთარი props-ები არ იცვლება (ახდენს props-ების Shallow Comparison-ს)."
    },
    correct: 'D',
    explanation: "ნაგულისხმევად მშობლის რენდერისას ყველა შვილი ხელახლა რენდერდება. React.memo ადარებს ახალ და ძველ props-ებს (Shallow Comparison) და თუ props-ები არ შეცვლილა, გამოტოვებს კომპონენტის re-render-ს."
  },
  {
    id: 404,
    category: 'Basic Optimization',
    title: "მოცემულია კოდი. რატომ დარენდერდება MemoizedChild კომპონენტი თავიდან ღილაკზე ყოველი დაჭერისას, მიუხედავად იმისა, რომ ის შეფუთულია React.memo-თი?",
    code: `function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MemoizedChild user={{ name: "Anna" }} />
    </div>
  );
}`,
    codeLang: 'jsx',
    options: {
      A: "React.memo არ მუშაობს div ტეგის შიგნით.",
      B: "ობიექტი { name: 'Anna' } ყოველი რენდერისას ხელახლა იქმნება მეხსიერებაში ახალი რეფერენსით (Reference Inequality), რაც არღვევს Shallow Comparison-ს.",
      C: "count ცვლადი ავტომატურად გადაეცემა ყველა შვილ კომპონენტს.",
      D: "ღილაკზე დაჭერა აუქმებს React.memo-ს ქეშირებას."
    },
    correct: 'B',
    explanation: "JavaScript-ში ობიექტების შედარება ხდება მეხსიერების რეფერენსით ({ name: 'Anna' } !== { name: 'Anna' }). Parent-ის ყოველ რენდერზე იქმნება ახალი ობიექტი, ამიტომ React.memo-ს ჰგონია, რომ prop შეიცვალა და მაინც რენდერავს შვილს."
  },
  {
    id: 405,
    category: 'Basic Optimization',
    title: "ვებგვერდის წარმადობის (Performance) გასაუმჯობესებლად, რომელი მიდგომაა ყველაზე ეფექტური სურათების ოპტიმიზაციისთვის?",
    code: null,
    options: {
      A: "ყველა სურათის გადაყვანა BMP ფორმატში და მაქსიმალური რეზოლუციის შენარჩუნება.",
      B: "სურათების ბაზაში Base64 სტრინგებად შენახვა და HTML-ში პირდაპირ ჩასმა.",
      C: "თანამედროვე ფორმატების (WebP, AVIF) გამოყენება, სწორი ზომების (width/height) მითითება და Native Lazy Loading (loading='lazy').",
      D: "სურათებისთვის alt ატრიბუტის წაშლა bundle size-ის შესამცირებლად."
    },
    correct: 'C',
    explanation: "WebP და AVIF ფორმატები უზრუნველყოფენ გაცილებით მცირე ფაილის ზომას ხარისხის დაკარგვის გარეშე. loading='lazy' სურათს ტვირთავს მხოლოდ მაშინ, როცა ის ხილვად არეს უახლოვდება, ხოლო ზომების მითითება გამორიცხავს Layout Shift-ს (CLS)."
  },
  {
    id: 406,
    category: 'Basic Optimization',
    title: "რას ნიშნავს ტერმინი 'Tree Shaking' თანამედროვე JavaScript Bundler-ებში (მაგ. Webpack, Vite, Rollup)?",
    code: null,
    options: {
      A: "ფაილების სახელების ავტომატურ შეცვლას შემთხვევითი ჰეშებით (Hashing) ქეშის გასასუფთავებლად.",
      B: "CSS სტილების გადაყვანას JavaScript კოდში.",
      C: "სერვერზე ფაილების ავტომატურ შეკუმშვას ZIP ფორმატში.",
      D: "კოდის ბაზიდან გამოუყენებელი (Dead Code / Unused exports) კოდის ავტომატურ ამოშლას საბოლოო bundle-იდან."
    },
    correct: 'D',
    explanation: "Tree Shaking არის bundle-ის ოპტიმიზაციის მეთოდი, რომელიც ეყრდნობა ES Module (import/export) სინტაქსს და ავტომატურად აცილებს პროექტიდან იმ ექსპორტებსა და კოდის ფრაგმენტებს, რომლებიც რეალურად არსად გამოიყენება."
  },
  {
    id: 407,
    category: 'Basic Optimization',
    title: "როდესაც ვებგვერდზე გვაქვს ძალიან დიდი სია (მაგალითად, 10,000 ელემენტი), რა ტექნიკა გამოიყენება DOM-ის გადატვირთვის თავიდან ასაცილებლად?",
    code: null,
    options: {
      A: "ყველა ელემენტის ერთდროული დარენდერება და დამალვა opacity: 0-ით.",
      B: "სიის ელემენტების sessionStorage-ში ჩაწერა DOM-ში ჩასმის ნაცვლად.",
      C: "List Virtualization (Windowing) — მხოლოდ იმ ელემენტების დარენდერება DOM-ში, რომლებიც მოცემულ მომენტში ეკრანის ხილვად არეშია (Viewport).",
      D: "setTimeout-ის გამოყენება თითოეული ელემენტის 1 მილიწამიანი დაყოვნებით ჩასატვირთად."
    },
    correct: 'C',
    explanation: "List Virtualization (მაგ. react-window, react-virtualized) DOM-ში ინახავს მხოლოდ რამდენიმე ხილვად ელემენტს და სქროლვისას დინამიურად ანაცვლებს მათ მონაცემებს. ეს მკვეთრად ზოგავს მეხსიერებას და უზრუნველყოფს 60fps გლუვ სქროლს."
  },
  {
    id: 408,
    category: 'Basic Optimization',
    title: "რა განსხვავებაა Debouncing-სა და Throttling-ს შორის?",
    code: null,
    options: {
      A: "Debounce აყოვნებს ფუნქციის გამოძახებას მანამ, სანამ გარკვეული დრო არ გავა ბოლო ივენთიდან (მაგ. Search input); Throttle კი ზღუდავს გამოძახებას ფიქსირებულ ინტერვალში ერთხელ (მაგ. Scroll event).",
      B: "Debounce გამოიყენება მხოლოდ CSS-ში, ხოლო Throttle JavaScript-ში.",
      C: "Throttle აჩერებს მოთხოვნას სრულად, ხოლო Debounce აჩქარებს მას.",
      D: "მათ შორის არანაირი განსხვავება არ არის."
    },
    correct: 'A',
    explanation: "Debounce ელოდება მომხმარებლის მოქმედების დასრულებას (მაგ. ბეჭდვის შეჩერებას 300ms) და მხოლოდ შემდეგ უშვებს ფუნქციას. Throttle კი უზრუნველყოფს, რომ უწყვეტი მოქმედების დროსაც (მაგ. სქროლვა ან ფანჯრის ზომის შეცვლა) ფუნქცია გაეშვას მაქსიმუმ X მილიწამში ერთხელ."
  },
  {
    id: 409,
    category: 'Basic Optimization',
    title: "რატომ არის დიდი ბიბლიოთეკების (მაგ. lodash) ასეთი სახით დაიმპორტება არასასურველი?",
    code: `import _ from 'lodash'; // ცუდი პრაქტიკა`,
    codeLang: 'javascript',
    options: {
      A: "იმპორტირდება მთლიანი lodash ბიბლიოთეკა (ასობით კილობაიტი), ნაცვლად მხოლოდ საჭირო კონკრეტული ფუნქციისა, რაც ზრდის Bundle Size-ს.",
      B: "Lodash არ მუშაობს React-თან.",
      C: "ეს გამოიწვევს სინტაქსურ შეცდომას ბრაუზერში.",
      D: "ასეთი იმპორტი შლის CSS ფაილებს."
    },
    correct: 'A',
    explanation: "მთლიანი ბიბლიოთეკის დაიმპორტებისას (`import _ from 'lodash'`) Tree Shaking ხშირად ვერ შლის გამოუყენებელ კოდს. სწორი პრაქტიკაა: `import debounce from 'lodash/debounce'` ან `lodash-es`-ის გამოყენება."
  },
  {
    id: 410,
    category: 'Basic Optimization',
    title: "რას ზომავს Core Web Vitals-ის მეტრიკა CLS (Cumulative Layout Shift)?",
    code: null,
    options: {
      A: "გვერდის ჩატვირთვისას ელემენტების მოულოდნელ, არასასურველ ვიზუალურ გადაადგილებას (Visual Stability).",
      B: "სერვერის მიერ პირველი ბაიტის დაბრუნების დროს (TTFB).",
      C: "JavaScript-ის ფაილის ზომას მეგაბაიტებში.",
      D: "მომხმარებლის ინტერნეტის სიჩქარეს."
    },
    correct: 'A',
    explanation: "CLS ზომავს გვერდის ვიზუალურ სტაბილურობას. თუ სურათებს ან რეკლამებს არ აქვთ წინასწარ მითითებული სიგანე/სიმაღლე (width/height), მათი ჩატვირთვისას ტექსტი უეცრად ხტება ქვევით, რაც აფუჭებს CLS ქულას."
  },
  {
    id: 411,
    category: 'Basic Optimization',
    title: "რას ემსახურება 'font-display: swap' CSS წესში შრიფტების ჩატვირთვისას?",
    code: `@font-face {
  font-family: 'MyFont';
  src: url('/fonts/myfont.woff2') format('woff2');
  font-display: swap;
}`,
    codeLang: 'css',
    options: {
      A: "შრიფტის ჩამოტვირთვამდე დაუყოვნებლივ აჩვენებს სისტემურ (fallback) შრიფტს, რათა თავიდან ავირიდოთ უხილავი ტექსტი (FOIT - Flash of Invisible Text).",
      B: "შრიფტს ავტომატურად გადათარგმნის სხვა ენაზე.",
      C: "შრიფტს გარდაქმნის SVG ფორმატში.",
      D: "შლის შრიფტს მობილურ მოწყობილობებზე."
    },
    correct: 'A',
    explanation: "`font-display: swap` ეუბნება ბრაუზერს: სანამ custom web font ჩამოიტვირთება, ტექსტი აჩვენე fallback სისტემური შრიფტით, ხოლო ჩამოტვირთვისთანავე ჩაანაცვლე ის. ეს უზრუნველყოფს ტექსტის დაუყოვნებლივ ხილვადობას."
  },
  {
    id: 412,
    category: 'Basic Optimization',
    title: "რატომ არის არასასურველი React-ში inline ფუნქციების მასობრივად შექმნა ხშირად რენდერებად კომპონენტებში (მაგ. რთულ სიებში)?",
    code: `<ComplexItem onClick={() => doSomething(id)} />`,
    codeLang: 'jsx',
    options: {
      A: "ყოველი რენდერისას მეხსიერებაში იქმნება ახალი ფუნქციის რეფერენსი, რაც არღვევს შვილი კომპონენტის React.memo-ს და იწვევს ზედმეტ re-render-ს.",
      B: "React კრძალავს ისრიანი (arrow) ფუნქციების გამოყენებას.",
      C: "ეს გამოიწვევს კომპილატორის დაქრაშვას.",
      D: "ბრაუზერი ავტომატურად გათიშავს JavaScript-ს."
    },
    correct: 'A',
    explanation: "თუ `<ComplexItem>` შეფუთულია `React.memo`-ში, inline ფუნქციის გადაცემა ყოველ რენდერზე აწვდის ახალ რეფერენსს (`fn !== fn`), რითაც `React.memo` აზრს კარგავს. ასეთ დროს გამოიყენება `useCallback`."
  },
  {
    id: 413,
    category: 'Basic Optimization',
    title: "რა არის Route-based Code Splitting React აპლიკაციებში?",
    code: null,
    options: {
      A: "აპლიკაციის დაყოფა ცალკეულ JS ნაწილებად (chunks) როუტების მიხედვით, რათა მომხმარებელმა ჩამოტვირთოს მხოლოდ იმ გვერდის კოდი, რომელზეც იმყოფება.",
      B: "ყველა როუტის ერთიან 10 მეგაბაიტიან ფაილში გაერთიანება.",
      C: "როუტების გადამისამართება გარე საიტზე.",
      D: "URL მისამართების ავტომატური დაშიფვრა."
    },
    correct: 'A',
    explanation: "Route-based Code Splitting (მაგ. `React.lazy` + React Router) უზრუნველყოფს, რომ Dashboard-ის ან Admin-ის კოდი არ ჩამოიტვირთოს, სანამ მომხმარებელი მთავარ გვერდზეა. ეს მკვეთრად აჩქარებს Initial Page Load-ს."
  },
  {
    id: 414,
    category: 'Basic Optimization',
    title: "რომელი ბრაუზერული ინსტრუმენტი გამოიყენება React კომპონენტების re-render-ების დროისა და მიზეზების გასაანალიზებლად?",
    code: null,
    options: {
      A: "React Developer Tools -> Profiler ტაბი",
      B: "Console log counter",
      C: "Network tab throttle",
      D: "Elements style inspector"
    },
    correct: 'A',
    explanation: "React DevTools-ის 'Profiler' ტაბი სპეციალურად შექმნილია კომპონენტების წარმადობის გასაზომად. ის აჩვენებს რომელი კომპონენტი რამდენ მილიწამში დარენდერდა და რა გახდა ამის მიზეზი (props change, state change, parent render)."
  },
  {
    id: 415,
    category: 'Basic Optimization',
    title: "რა ეფექტი აქვს ბრაუზერის Gzip ან Brotli კომპრესიას ვებგვერდის წარმადობაზე?",
    code: null,
    options: {
      A: "სერვერიდან გადმოცემული ტექსტური ფაილების (HTML, JS, CSS) ზომას ამცირებს 60-80%-ით ქსელში გადაცემისას, რაც საგრძნობლად აჩქარებს ჩატვირთვას.",
      B: "სურათების ხარისხს ზრდის 4K რეზოლუციამდე.",
      C: "კომპიუტერის პროცესორის სიხშირეს ზრდის.",
      D: "მხოლოდ მონაცემთა ბაზის ზომას ამცირებს."
    },
    correct: 'A',
    explanation: "Gzip და განსაკუთრებით Brotli არის HTTP დონეზე ტექსტური ფაილების შეკუმშვის ალგორითმები. ისინი დაახლოებით 70%-ით ამცირებენ bundle-ის გადაცემის დროს ინტერნეტში, რაც გადამწყვეტია სწრაფი Initial Load-ისთვის."
  }
];

// Helper: Fisher-Yates Shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate a randomized 30-question exam respecting category quotas:
// - React: 8
// - TypeScript: 8
// - Tailwind CSS: 7
// - Basic Optimization: 7
export function generateExamQuestions(): Question[] {
  const reactPool = allQuestionsPool.filter(q => q.category === 'React');
  const tsPool = allQuestionsPool.filter(q => q.category === 'TypeScript');
  const twPool = allQuestionsPool.filter(q => q.category === 'Tailwind CSS');
  const optPool = allQuestionsPool.filter(q => q.category === 'Basic Optimization');

  const selectedReact = shuffleArray(reactPool).slice(0, 8);
  const selectedTs = shuffleArray(tsPool).slice(0, 8);
  const selectedTw = shuffleArray(twPool).slice(0, 7);
  const selectedOpt = shuffleArray(optPool).slice(0, 7);

  const combined = [
    ...selectedReact,
    ...selectedTs,
    ...selectedTw,
    ...selectedOpt
  ];

  // Re-map IDs sequentially from 1 to 30 for the active test
  return combined.map((q, index) => ({
    ...q,
    id: index + 1
  }));
}

// Default initial question set
export const questionsData: Question[] = generateExamQuestions();
